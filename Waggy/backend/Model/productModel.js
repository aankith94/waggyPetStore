import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    image: { type: String, default: "" },
    category: { type: String, default: "" },
  },
  { timestamps: true }
);

const productModel = new mongoose.model("Product", productSchema);
export default productModel;
