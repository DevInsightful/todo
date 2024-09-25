require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
const app = express();
app.use(cors());
const port = process.env.PORT || 3200;
const dbConStr = process.env.DBConnectionStr;
app.use(express.json());
mongoose
  .connect(dbConStr)
  .then(() => {
    app.listen(port, (req, res) => {
      console.log("Connected to database server running at:", port);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use((req, _res, next) => {
  console.log(req.method + " " + req.url);
  next();
});
app.use(router);
