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
app.use('/privateAPI',privateAPI);
app.post('/login',(req,res)=>{
  util.loginAPI(req,res);
});
privateAPI.post('/getClock',(req,res)=>{
  /*
  const cookieList =  getAppCookies(req);
  console.log(cookieList);
  */
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
  //console.log(cookierParser.signedCookies(req.signedCookies, secret));
})
/*
const getAppCookies = (req) => {
  // We extract the raw cookies from the request headers
  const rawCookies = req.headers.cookie.split('; ');
  // rawCookies = ['myapp=secretcookie, 'analytics_cookie=beacon;']
 
  const parsedCookies = {};
  rawCookies.forEach(rawCookie=>{
    const parsedCookie = rawCookie.split('=');
    // parsedCookie = ['myapp', 'secretcookie'], ['analytics_cookie', 'beacon']
   parsedCookies[parsedCookie[0]] = parsedCookie[1];
  });
  return parsedCookies;
};
*/ 
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);