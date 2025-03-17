const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: String,
    images: [String],
    category: {
      type: String,
      enum: ["men", "women", "kids", "books", "electronics", "others"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", bookSchema);
