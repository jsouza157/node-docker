require('dotenv').config()
const express = require("express");

const app = express();

const PORT = process.env.PORT | 3000
const HOST = process.env.HOST | '0.0.0.0'

app.get("/", (req, res) => {
  res.send("Hi Dockers!!!");
});

app.listen(PORT, HOST);