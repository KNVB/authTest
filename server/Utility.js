module.exports ={
  isAuthenticated,
  isEmpty,
  loginAPI,
  logout
}
function isAuthenticated(req,res,next){
  let signedCookies=req.signedCookies;
  if (isEmpty(signedCookies) || (!signedCookies.isAdmin)){
    return res.status(401).end();
  } else {
    next();
  }
}
function isEmpty(obj){
  return (Object.keys(obj).length === 0 && obj.constructor === Object);
}
function loginAPI(req,res){
  let loginName=req.body.loginName;
  let password=req.body.adminPwd;
  if ((loginName==='admin') && (password==='password')){
    console.log("Admin. login success.");
    res.cookie('isAdmin',true,{
      path:'/',
      httpOnly:true,
      signed: true, 
      maxAge:3600000
    });
    res.status(200).send({});
  } else {
    res.status(401).end();
  }
}
function logout(res){
  res.clearCookie('isAdmin');
  console.log("Admin. logout success.");
  res.send({returnMsg:"OK"});
}