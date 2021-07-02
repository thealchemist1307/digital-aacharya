const express =require('express');
const router =express.Router();
const Post =require('../models/Course');
router.route('/get').get((req,res)=>{
    const subject=req.query.subject
    Post.find({"subject":subject})
        .then((data)=>{
            res.json(data);
            console.log(data)
        })
        .catch((err)=>{
            console.log(err);
        })
})





module.exports  =router;