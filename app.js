require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello wotlds");
});

app.listen(process.env.PORT, () => {
  console.log("Server running at PORT", process.env.PORT);
});
