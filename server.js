const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  // db.select('*').from('accounts');
  db("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to GET your account"
      });
    });
});

server.get("/:id", (req, res) => {});

server.post("/", (req, res) => {});

server.put("/:id", (req, res) => {});

server.delete("/:id", (req, res) => {});

module.exports = server;
