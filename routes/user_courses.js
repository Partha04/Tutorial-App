const express = require("express");
const routes = express.Router();
const db_config = require("../config/db_config");

routes.get("/usercourse", (req, res) => {
  db_config.query("SELECT * FROM `user_courses`", [], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
routes.get("/usercourse/:id", (req, res) => {
  db_config.query(
    "SELECT * FROM `user_courses` WHERE `ucid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.post("/usercourse", (req, res) => {

  db_config.query(
    "SELECT `ucid`, `userid`, `courseid` FROM `user_courses` WHERE `userid`=? and `courseid`=?",
    [req.user.userid, req.body.courseid],
    (Err, Result) => {
      if(Err) throw Err;

      if(Result.length===0){

        db_config.query(
          "INSERT INTO `user_courses`(`userid`,`courseid`) VALUES (?,?)",
          [req.user.userid, req.body.courseid],
          (err, result) => {
          if (err) throw err;
          res.status(200).json({ msg: "success" });
        }
        );

      }
      else{
        res.status(200).json({"msg":"already added"})
      }
    }
  );
});
routes.put("/usercourse/:id", (req, res) => {
  db_config.query(
    "UPDATE `user_courses` SET `userid`=?, `courseid`=? WHERE `ucid`=?",
    [req.body.userid, req.body.courseid, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
routes.delete("/usercourse/:id", (req, res) => {
  db_config.query(
    "DELETE FROM `user_courses` WHERE `ucid`=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

module.exports = routes;
