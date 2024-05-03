require("dotenv").config();
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    this.middelwares();
    this.routes();
  }

  middelwares() {
    // CORS
    this.app.use(cors());

    // Public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running at PORT", process.env.PORT);
    });
  }
}

module.exports = Server;
