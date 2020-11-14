const express = require("express");
const routes = express.Router();
const db_config = require("../config/db_config");

routes.get("/practice", (req, res) => {
  db_config.query("Select * from `practice`", 
  [], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
routes.get("/practice/:id", (req, res) => {
  db_config.query(
    "SELECT `topicid`, `link`, `source` FROM `practice` WHERE `practiceid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.post("/practice", (req, res) => {
  db_config.query(
    "INSERT INTO `practice`(`topicid`, `link`, `source`) VALUES (?,?,?)",
    [req.body.topicid, req.body.link, req.body.source],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.put("/practice/:id", (req, res) => {
  db_config.query(
    "UPDATE `practice` SET `topicid`=?,`link`=?,`source`=? WHERE `practiceid`=?",
    [req.body.topicid, req.body.link, req.body.source, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.delete("/practice/:id", (req, res) => {
  db_config.query(
    "DELETE from `practice` where `practiceid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

module.exports=routes;