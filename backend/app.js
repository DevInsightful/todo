require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/todoRoutes");
const port = process.env.PORT || 3200;
app.listen(port, (req, res) => {
  console.log(port);
});
app.use(router);
