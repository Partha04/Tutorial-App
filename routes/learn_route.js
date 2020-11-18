const express = require("express");
const routes = express.Router();
const db_config = require("../config/db_config");

routes.get("/learn", (req, res) => {
  db_config.query("Select * from `learn`", 
  [], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
routes.get("/learn/:id", (req, res) => {
  db_config.query(
    "SELECT `learnid`,`link`, `type` FROM `learn` WHERE `topicid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.post("/learn", (req, res) => {
  db_config.query(
    "INSERT INTO `learn`(`topicid`, `link`, `type`) VALUES (?,?,?)",
    [req.body.topicid, req.body.link, req.body.type],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.put("/learn/:id", (req, res) => {
  db_config.query(
    "UPDATE `learn` SET `topicid`=?,`link`=?,`type`=? WHERE `learnid`=?",
    [req.body.topicid, req.body.link, req.body.type, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.delete("/learn/:id", (req, res) => {
  db_config.query(
    "DELETE from `learn` where `learnid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

module.exports=routes;