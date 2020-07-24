const express =require('express');
const router =express.Router();
const Counter = require("../models/Counter")
router.route('/get').get((req,res)=>{
    const field=req.query.field
    Counter.find({"Field":field})
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            console.log(err);
        })
})





module.exports  =router;