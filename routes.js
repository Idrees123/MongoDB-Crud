var express = require('express');
var router = express.Router();
var controller = require('./controller');


/* Registering All the routes */

router.post('/task', controller.insert);
router.put('/update/:taskid', controller.update);
router.get('/read/:taskid',checkJWT, checkJWT2,controller.read);
router.delete('/delete/:taskid', controller.delete);



function checkJWT(req,res,next) {
    console.log("hello");
    // jwt
    // decode
    req.userDetails = "Idress";
    next();
}

function checkJWT2(req,res,next) {
    console.log("hello",req.userDetails);
    // jwt
    // decod
    next();
}


module.exports=router;



