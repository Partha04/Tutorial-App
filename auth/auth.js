const express = require("express");
const db_config = require("../config/db_config");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.json({ err: "add all fields" });
  }

  db_config.query(
    "select `username` from `user` where `email`=?",
    [req.body.email],
    (Err, Result) => {
      if (Err) throw Err;

      if (Result.length == 0) {
        db_config.query(
          "INSERT INTO `user`(`username`, `email`, `password`) VALUES (?,?,?)",
          [req.body.username, req.body.email, req.body.password],
          (err, result) => {
            if (err) {
              console.log(err);
              res.json({ status: "err" });
            }
            res.status(200).json({ status: "sucess" });
          }
        );
      }
    }
  );
});

router.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ err: "add all fields" });
  }
  db_config.query(
    "select `userid`,`username`,`password` from `user` where `email`=?",
    [req.body.email],
    (Err, Result) => {
      if (Err) throw Err;

      if (Result.length!==0 &&Result[0].password == req.body.password) {
        const token = jwt.sign(Result[0].userid, "secret");
        console.log("logged in");
        res.json({ token: token, username: Result[0].name });
      } else {
        res.json({ token: "" });
      }
    }
  );
});
module.exports = router;
