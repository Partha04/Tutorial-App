const express = require("express");
const routes = express.Router();
const db_config = require("../config/db_config");

routes.get("/course", (req, res) => {
  db_config.query("SELECT * FROM `course`", [], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
routes.get("/course/:id", (req, res) => {
  db_config.query(
    "SELECT  `coursename`, `publisher`,`imgurl`, `coursedescription`, `nooftopics`, `createdate`  FROM `course` WHERE `courseid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.post("/course", (req, res) => {
  db_config.query(
    "INSERT INTO `course`(`coursename`, `publisher`,`imgurl`, `coursedescription`) VALUES (?,?,?,?)",
    [
      req.body.coursename,
      req.body.publisher,
      req.body.imgurl,
      req.body.coursedescription,
    ],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.put("/course/:id", (req, res) => {
  db_config.query(
    "UPDATE `course` SET `coursename`=?,`publisher`=?,`imgurl`=?,`coursedescription`=?,`nooftopics`=?,`createdate`=? WHERE `courseid`=?",
    [
      req.body.coursename,
      req.body.publisher,
      req.body.imgurl,
      req.body.coursedescription,
      req.body.nooftopics,
      Date.now(),
      req.params.id,
    ],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.delete("/course/:id", (req, res) => {
  db_config.query(
    "DELETE FROM `course` WHERE `courseid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

module.exports=routes;