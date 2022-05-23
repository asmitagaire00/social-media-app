const Post = require("../models/Post")
const User = require("../models/User")

const router= require("express").Router();

//create posts
router.post('/', async(req,res)=>{
    try{
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(200).json(newPost);
    }catch(err){
        res.status(403).json({message: 'Couldnot create post'});
    }
  })

//get posts
router.get('/:id', async(req,res)=>{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
})

//update posts
router.put('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
             await post.updateOne({$set:req.body});
             res.status(200).json("Successfully updated post")
        }
        else{
            res.status(403).json("you can update only your post")
        }
    }
    catch(err){
        res.status(500).json({message:"couldnot find post"})
    }
})
//delete posts
router.delete('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Successfully deleted.")
        }else{
            res.status(403).json("you can delete only your post")
        }
    }
    catch(err){
        res.status(500).json({message:"Couldnot delete post"})
    }
})

//like a post
router.put("/:id/like", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("Liked post")
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("Unliked post")

        }
    }
    catch{
        res.status(500).json({message:"couldnot like post"})
    }
})

//get timeline post 
// router.get("/timeline", async(req, res)=>{
//     try{
//         const currentUser = await User.findById(req.body.userId);
//         // const userFollowingList = await currentUser.find(req.body.following)
//         console.log("followinglist",currentUser)
//     }
//     catch{
//         res.status(500).json({message:"Couldnot refresh feed"})
//     }

// })

module.exports = router;


