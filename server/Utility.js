module.exports ={
    loginAPI
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