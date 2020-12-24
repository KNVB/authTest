module.exports ={
  isAuthenticated,
  isEmpty,
  loginAPI
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
  if ((loginName==='rosterAdmin') && (password==='password')){
    console.log("Admin. login success.");
    res.cookie('isAdmin',true,{
      path:'/',
      httpOnly:true,
      signed: true, 
      maxAge:3600000
    });
    res.send("OK");
  } else {
    res.sendStatus(401);
  }
}