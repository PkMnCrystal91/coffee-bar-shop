require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    // Data connection
    this.conectarDB();

    this.middelwares();
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middelwares() {
    // CORS
    this.app.use(cors());

    //JSON reading and parsing
    this.app.use(express.json());

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
