var express=require('express');
var router=require('./routes')
var bodyParser = require('body-parser');
var app=express();//server creation
app.use(bodyParser.json())//to parse into json
app.use(function (req, res, next) {
    console.log("always call");
    next();
});
app.listen(4200);//portno.
app.use(router)//routes
console.log('Listening');
console.log("crud")
