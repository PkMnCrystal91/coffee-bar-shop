require("dotenv").config();
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middelwares();
    this.routes();
  }

  middelwares() {
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running at PORT", process.env.PORT);
    });
  }
}

module.exports = Server;
