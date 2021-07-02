const express =require('express');
const router =express.Router();
const Post = require("../models/Course")
router.route('/get').get((req,res)=>{
    Post.find({"status":"pending"})
        .then((data)=>{
            res.json(data);
            console.log(data)
        })
        .catch((err)=>{
            console.log(err);
        })
})





module.exports  =router;