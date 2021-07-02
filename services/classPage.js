const express =require('express');
const router =express.Router();
const Post =require('../models/Course');
router.route('/get').get((req,res)=>{
    const id=req.query.id
    console.log(id)
    Post.find({"id":id})
        .then((data)=>{
            res.json(data);
            console.log(data)
        })
        .catch((err)=>{
            console.log(err);
        })
})





module.exports  =router;