const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//get a user
router.get("/" , async(req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId? await User.findById(userId):await User.findOne({username:username});
        res.status(200).json(user);
    }
    catch(err){
        console.log("couln't get users : users.js",err)
       return res.status(500).json(err);
    }
})

//post a user
router.post("/", async(req,res)=>{
    console.log("posting working");
    try{
        const newUser =new User(req.body);
        await newUser.save();
        res.status(200).json(newUser)
    }
    catch(err){
        return res.status(500).json(err);
    }
})

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }

      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json(user);
      } catch (err) {
        return res.status(500).json({message:"Account couldnot update"},err);
      }
    } else {
      return res.status(403).json({message:"You can update only your account!"});
    }
  });

//delete user
router.delete("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
             await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted.")
        }
        catch(err){
           return res.status(500).json({message:"Account couldnot delete"},err);
        }
    }
    else{
        return res.status(403).json({message:"You can only delete your account."})
    }
})


//follow user
router.put("/:id/follow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await  User.findById(req.body.userId)
           if(!user.followers.includes(req.body.userId)){
                 await user.updateOne({$push:{followers:req.body.userId}});
                 await currentUser.updateOne({$push:{followings:req.params.id}})
                 res.status(200).json({message:"user had been followed"})
           }
           else{
               res.status(403).json({message:"Already following"})
           }
        }
        catch(err){
            console.log("error occured in follow request")
            res.status(500).json({message:"error occured in follow request"},err);
        }
    }
    else{
        res.status(403).json({message:"You cannot follow yourself"})
    }
})

//unfollow user

router.put("/:id/unfollow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        try{
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers: req.body.userId}});
                await currentUser.updateOne({$pull:{following: req.params.id}});
                res.status(200).json({message:"user has been unfollowed"})

            }else{
                res.status(403).json({message:"Not following"})
            }
        }
        catch(err){
            res.status(500).json({message:"error occured in unfollow api"},err);
        }
    }
    else{
        res.status(403).json({message:"You cannot unfollow yourself!"})
    }
})

//get user's friend
router.get("/friends/:userId", async(req,res)=>{
    try{
        const user= await User.findById(req.params.userId);
        const friends = await Promise.all(user.followings.map((friendId)=>{
            return User.findById(friendId)
        }))
        const friendList=[];
        friends.map((friend)=>{
            const{_id,username,profilePicture}= friend;
            friendList.push({_id,username,profilePicture})
        });
        res.status(200).json(friendList)
    }catch(err){console.log("error occured in friends get request",err)}
})

module.exports = router;