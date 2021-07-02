const express =require('express');
const router =express.Router();
const Course =require('../models/Course');
const Counter = require("../models/Counter")
router.route('/get').get((req,res)=>{
    console.log("get request")
    Course.find({})
        .then((data)=>{
            res.json(data);
            
        })
        .catch((err)=>{
            console.log(err);
        })
})
router.route('/post').post((req,res)=>{
    const newRequest=new Course({
        id:req.body.id,
        subject: req.body.subject,
        name:req.body.name

    });
    
    newRequest.save().then(post=>res.json(post));
    console.log("Request sucessfully submitted");
});




module.exports  =router;