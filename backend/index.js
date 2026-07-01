require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const routes = require('./routes/Routes')
connectDB();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/', routes)

app.listen(5000, () => {
  console.log("Server running on port 5000");
});