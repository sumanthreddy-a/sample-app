var express = require('express');
var router = express.Router();
var login=require("../models/login")

/* GET users listing. */
router.post('/', function(req, res, next) {
      var username=req.body.username
      var password=req.body.password
      login.login(username,function(data){
        console.log(data)
          if(data[0].username==username && data[0].password==password){
            res.json({
              sucess:true,
              data:null,
              message:"login sucess"
            })
          }
          else{
            res.json({
              sucess:false,
              data:null,
              message:"wrong credentials"
            })
          }
      })
});
router.post('/register', function(req, res, next) {
      login.register(req.body,function(data){
          if(data){
            res.json({
              sucess:true,
              data:null,
              message:"user created successfully"
            })
          }
          else{
            res.json({
              sucess:false,
              data:null,
              message:"error"
            })
          }
      })
});

module.exports = router;
