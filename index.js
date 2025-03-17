const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

const connectDB = require("./connectMongo");

connectDB();

const BookModel = require("./models/book.model");

app.get("/api/v1/books", async (req, res) => {
  return res.status(200).json("responseeeeedd");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
