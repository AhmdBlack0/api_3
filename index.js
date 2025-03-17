const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

const connectDB = require("./connectMongo");

connectDB();

const productModel = require("./models/product.model");

app.get("/api/products", async (req, res) => {
  const products = await productModel.find();
  return res.status(200).json(products);
});

app.post("/api/products", async (req, res) => {
  const {
    title,
    price,
    description,
    images,
    category,
    quantity,
    status,
    rate,
  } = req.body;
  try {
    const product = await productModel.create({
      title,
      price,
      description,
      images,
      category,
      quantity,
      status,
      rate,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
