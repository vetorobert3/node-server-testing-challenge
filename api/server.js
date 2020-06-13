const express = require("express");

// const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running!" });
});

server.get("/motos", (req, res) => {
  Motos.getAll()
    .then(motos => {
      res.status(200).json(motos);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;