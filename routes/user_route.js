const e = require("express");
const express = require("express");
const routes =express.Router();
const db_config = require("../config/db_config");

routes.get("/user", (req, res) => {
  db_config.query("select * from user", [], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

routes.get("/user/:id", (req, res) => {
  db_config.query(
    "select * from user where userid=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});
routes.post("/user", (req, res) => {
  db_config.query(
    "INSERT INTO `user`(`username`, `email`, `password`) VALUES (?,?,?)",
    [req.body.username, req.body.email, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});
routes.put("/user/:id", (req, res) => {
  db_config.query(
    "UPDATE `user` SET `username`=?,`email`=?,`password`=? WHERE `userid`=? ",
    [req.body.username, req.body.email, req.body.password, req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

routes.delete("/user/:id", (req, res) => {
  db_config.query(
    "DELETE FROM `user` WHERE `userid`=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
});

module.exports=routes;