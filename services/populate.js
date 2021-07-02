const express =require('express');
const router =express.Router();
const Course =require('../models/Course');
const Counter = require("../models/Counter")
router.route('/post').post((req,res)=>{
    for(var i=0;i<8;i++)
    {
        const newRequest=new Course({
            id:i,
            subject: [
                {
                    "name":("F1C"+i).toString(),
                    "takenBy":"F1"
                },
                        {
                    "name":("F2C"+i).toString(),
                    "takenBy":"F2"
                },
                        {
                    "name":("F3C"+i).toString(),
                    "takenBy":"F3"
                },
                        {
                    "name":("F4C"+i).toString(),
                    "takenBy":"F4"
                },
                        {
                    "name":("F5C"+i).toString(),
                    "takenBy":"F5"
                },
                {
                    "name":("F6C"+i).toString(),
                    "takenBy":"F6"
                },
                {
                    "name":("F7C"+i).toString(),
                    "takenBy":"F7"
                }
            ],
            name:("C"+i).toString()
    
        });
        if(i==9)
        {
            newRequest.save().then(post=>res.json(post));
            console.log("Request sucessfully submitted");
        }
        else
        {
            newRequest.save()
        }

    }

});




module.exports  =router;