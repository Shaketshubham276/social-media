const Conversation = require("../models/Conversation");

const router=require("express").Router()
// const Conversation=require("../models/Conversation")


// new Conversation
router.post("/",async (req,res)=>{
    const newConversation=new Conversation({
        members:[req.body.senderId,req.body.receiverId]
    })
    try{
        const savedConversation=await newConversation.save();
        res.status(200).json(savedConversation)
    }catch(err){
        res.status(500).json(err)
    }
})
// Get Conversation of a User
router.get("/:userId",async(req,res)=>{
    try{
        const conversation=await Conversation.find({
            // This is how we can find in a members array that it includes or not
            members:{$in:[req.params.userId]},
        });
        res.status(200).json(conversation)
            
        
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router;
