const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const db = require("./db/dbConn.js");

// adding the dependency

// app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT, () => {
  console.log("Server Start");
});
