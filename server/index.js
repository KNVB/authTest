const bodyParser = require('body-parser');
const cookierParser = require('cookie-parser');
const express = require('express');
const app = express();

let privateAPI= express.Router();
let util=require("./Utility.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookierParser('這三件事'));

app.use('/privateAPI',util.isAuthenticated,privateAPI);
app.post('/login',(req,res)=>{
  util.loginAPI(req,res);
});
privateAPI.post('/logout',(req,res)=>{
  util.logout(res);
})
privateAPI.get('/getClock',(req,res)=>{
  console.log(req.query);
  let now =new Date();
  res.send({date:now.getDate(),month:now.getMonth(),year:now.getFullYear()});
});
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);