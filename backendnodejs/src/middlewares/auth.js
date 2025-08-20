import jwt from 'jsonwebtoken'
const auth=(req,res,next)=>{
const authHeaders=req.headers?.authorization
//console.log(authHeaders)
let authToken;
if(authHeaders&&authHeaders.startsWith("Bearer")){
 authToken=authHeaders.split(" ")[1]
    console.log(authToken)
}else{
    const cookie=req.headers.cookie
    if(!cookie) return res.status(401).send("UnAuthorized")
     authToken=cookie.split("=")[1];
}
if(!authToken) return res.status(401).send("UnAuthorized")
console.log(authToken) 
jwt.verify(authToken,process.env.JWT_SECRET,function(error, data) {
    // console.log(decoded.foo)
    if(error){
        return res.status(401).send("UnAuthorized")
    }
    console.log(data); 
    req.user=data;
    next();
  });
}
// axios.post("http://localhost:5000/api/products",{
//     headers:{
//         Authorization:`Bearer ${}`
//     }
//})
export default auth;
