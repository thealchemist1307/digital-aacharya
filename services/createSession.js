const express =require('express');
const router =express.Router();
const OpenTok=require("opentok")
router.route('/create').get((req,res)=>{
    var opentok = new OpenTok("46855084", "1c82501bdeaca50ec05160c88e021f010d83f80a");
    var sessionId;
    opentok.createSession({mediaMode:"routed"}, function(error, session) {
      if (error) {
        console.log("Error creating session:", error)
      } else {
        sessionId = session.sessionId;
        console.log("Session ID: " + sessionId);
        res.send(sessionId)
      }
    });
})

module.exports  =router;