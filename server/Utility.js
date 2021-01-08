module.exports ={
  isAuthenticated,
  isEmpty,
  loginAPI,
  logout
}
const accessTokenSecret = '這三件事';
const jwt = require('jsonwebtoken');

function isEmpty(obj){
  return (Object.keys(obj).length === 0 && obj.constructor === Object);
}
function isAuthenticated(req,res,next){
  let signedCookies=req.signedCookies;
  if (isEmpty(signedCookies)){
    return res.status(401).end();
  } else {
    let token=signedCookies.isAdmin;
    try{
      jwt.verify(token,accessTokenSecret);
      next();
    }
    catch (error){
      return res.status(401).end();
    }
  }
}

function loginAPI(req,res){
  const { loginName, adminPwd } = req.body;
  if ((loginName==='admin') && (adminPwd==='password')){
    const accessToken = jwt.sign({ username: loginName }, accessTokenSecret,{ expiresIn: '1h' });
    res.cookie('isAdmin',accessToken,{
      path:'/privateAPI/',
      httpOnly:true,
      signed: true, 
      maxAge:3600000
    });
    
    res.json({
      accessToken
    }).send();
    
  } else {
    res.status(401).send();
  }  
};
function logout(res){
  res.clearCookie('isAdmin',{ path: '/privateAPI/' });
  console.log("Admin. logout success.");
  res.send({returnMsg:"OK"});
}