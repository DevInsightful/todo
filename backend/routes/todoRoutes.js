const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ Message: "Success" });
});

module.exports = router;
