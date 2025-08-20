// const logger=async(req,res,next)=>{
//     console.log(`method:${req.method} url:${req.originalUrl}`)
//     if(req.method==="DELETE"){
//     return res.send("this method   not  allowed")
//     }
//     next()
// }
// export default logger
const logger=async (req,res,next)=>{
    console.log(`method:${req.method} url:${req.originalUrl}`)
    
    next()
    }
    export default logger