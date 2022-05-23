const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { findOne } = require("../models/User");

//register
router.post("/register" , async(req,res)=>{
   
    try{
        //generate password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);

        //create newuser
        const newUser =  new User({
            username: req.body.username,
            email:req.body.email,
            password:hashedpassword
            
        })

        //save user and return response
        const user= await newUser.save();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err);
    }
})


router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email}) ;
        !user&&res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword&&res.status(400).json("password didn't match");

        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;

