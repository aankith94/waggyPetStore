import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: null,
  },
  quantity: { type: Number, default: 1 },
});
const cartModel = new mongoose.model("Cart", cartSchema);

export default cartModel;
