const express =require('express');
const router =express.Router();
const Post =require('../models/Add_Class');
const Counter = require("../models/Counter")
router.route('/get').get((req,res)=>{
    const email=req.query.email
    Post.find({"email":email})
        .then((data)=>{
            res.json(data);
            
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.route('/post').post((req,res)=>{
    const newRequest=new Post({
        id:req.body.id,
        name:  req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        fees : req.body.fees,  
        time:req.body.time,
        status:req.body.status     
    });
    
    newRequest.save().then(post=>res.json(post));
    console.log("Request sucessfully submitted");
    Counter.findOneAndUpdate({ Field: "Class" }, { $inc: { Counter: 1 } }, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send('Succesfully saved.');
    });
});




module.exports  =router;