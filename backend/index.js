const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const productRouter = require('./routes/product.route');
const cartRouter = require('./routes/my-cart.route')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use(productRouter);
app.use(cartRouter);

mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
  console.log("connected to db");

  app.listen(PORT, () => {
    console.log("server started");
  });
});
