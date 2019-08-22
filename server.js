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

server.get("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where({ id })
    .then(accounts => {
      // console.log("accounts", accounts);newAccount
      const account = accounts[0];
      newAccount;
      newAccount;
      if (account) {
        res.status(500).json(account);
      } else {
        res.status(404).json({
          message: "The ID you requested does not exist"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Unable to GET your account by ID"
      });
    });
});

server.post("/", (req, res) => {
  const newAccount = req.body;
  db("accounts")
    .insert(newAccount)
    .then(id => {
      res.status(201).json({ newAccountId: id[0] });
    })
    .catch(error => {
      res.status(500).json({
        message: "Can not create new account"
      });
    });
});

server.put("/:id", (req, res) => {
  const { id } = req.params;
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
});

module.exports = server;
