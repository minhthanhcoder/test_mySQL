const express = require("express");
const router = express.Router();
const database = require("../connection/connectMySQL");

router.get("/", (req, res) => {
  const querySting = "select * from post";
  database.query(querySting, (err, results) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "đã có lỗi",
        data: err,
      });
    } else {
      res.status(200).json({
        status: 200,
        results: results.length,
        data: results,
      });
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const querySting = "select * from post where UserId = ?";
  database.query(querySting, id, (err, results) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "đã có lỗi",
        data: err,
      });
    } else {
      res.status(200).json({
        status: 200,
        data: results,
      });
    }
  });
});

router.delete("/:id");
module.exports = router;
