const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
  console.log("connected to db");

  app.listen(PORT, () => {
    console.log("server started");
  });
});
