 const express=require("express");
const routes=express.Router()
const db_config=require("../config/db_config");


routes.get("/topic",
(req,res)=>{
    db_config.query("SELECT * FROM `topics`",[],(err,result)=>{
        if(err) throw err;
        res.json(result);
    }
)})
routes.get("/topic/:id",
(req,res)=>{
    db_config.query("SELECT `topicid`,`topicname`, `topicdescription`, `nooflearn`, `noofpractice` FROM `topics` WHERE `lessionid`=?",
    [req.params.id],(err,result)=>{
        if(err) throw err;
        res.json(result);
    })})
routes.post("/topic",(req,res)=>{
    db_config.query("INSERT INTO `topics`(`topicname`, `topicdescription`, `lessionid`) VALUES (?,?,?)",
    [req.body.topicname, req.body.topicdescription, req.body.lessionid],(err,result)=>{
        if(err) throw err;
        res.json(result);
    })})
routes.put("/topic/:id",(req,res)=>{
    db_config.query("UPDATE `topics` SET `topicname`=?,`topicdescription`=?,`lessionid`=?,`nooflearn`=?,`noofpractice`=? WHERE `topicid`=?",
    [req.body.topicname, req.body.topicdescription, req.body.lessionid, req.body.nooflearn, req.body.noofpractice,req.params.id],(err,result)=>{
    if(err) throw err;
    res.json(result);
})})
routes.delete("/topic/:id",(req,res)=>{
    db_config.query("DELETE FROM `topics` where `topicid`=?",
    [req.params.id],(err,result)=>{
    if(err) throw err;
    res.json(result);
})})


module.exports=routes;


