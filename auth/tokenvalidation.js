const jwt = require('jsonwebtoken')
const db_config=require("../config/db_config")
module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,"secret",(err,tokenid)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }
        db_config.query("select `userid`, `username`,`email` from `user` where userid=?",[tokenid],(err,result)=>{
            if(err) throw err;
            else{
                const data=JSON.parse(JSON.stringify(result));
                req.user=data[0];
                next();
            }

        })       
    })
}