const express = require("express");
const routes =express.Router();
const db_config = require("../config/db_config");

routes.get("/lession", (req, res) => {
  db_config.query("select * from `lessons`", [], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
routes.get("/lession/:id", (req, res) => {
  db_config.query(
    "SELECT `lessionid`, `lessionname` FROM `lessons` WHERE `courseid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.post("/lession", (req, res) => {
  db_config.query(
    "INSERT INTO `lessons`(`courseid`, `lessionname`) VALUES (?,?)",
    [req.body.courseid, req.body.lessionname],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.put("/lession/:id", (req, res) => {
  db_config.query(
    "UPDATE `lessons` SET `courseid`=?,`lessionname`=? WHERE `lessionid`=?",
    [req.body.courseid, req.body.lessionname, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.delete("/lession/:id", (req, res) => {
    db_config.query(
      "DELETE FROM `lessons` WHERE `lessionid`=?",
      [req.params.id],
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });

 module.exports=routes; 