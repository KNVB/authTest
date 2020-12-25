const bodyParser = require('body-parser');
const cookierParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');

const app = express();

let privateAPI= express.Router();
let util=require("./Utility.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookierParser('這三件事'));
app.use(cors());
app.use('/privateAPI',util.isAuthenticated,privateAPI);
app.post('/login',(req,res)=>{
  util.loginAPI(req,res);
});
privateAPI.get('/getClock',(req,res)=>{
  res.send(new Date());
});
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);