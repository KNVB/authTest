const bodyParser = require('body-parser');
const cookierParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');

const app = express();
let privateAPI= express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookierParser('這三件事'));
app.use(cors());
app.use('/privateAPI',privateAPI);
app.post('/login',function(req,res){
  //console.log(res.body,req.body);
  let loginName=req.body.loginName;
  let password=req.body.adminPwd;
  if ((loginName==='rosterAdmin') && (password==='password')){
    console.log("Admin. login success.");
    res.cookie('isAdmin',true,{
      path:'/',
      httpOnly:true,
      signed: true, 
      maxAge:3600000
    });
    //return res.redirect('/adminPlatform');
    res.send("OK");
  } else {
    res.sendStatus(401);
  }
});
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);