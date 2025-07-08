import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: { type: String, default: "" },
    image: { type: String, default: "" },
    userType: {
      type: String,
      enum: ["User", "Admin"],
    },
    token: { type: String, default: "" },
    loginTime: { type: Number, default: 0 },
  },
  { timeStamps: true }
);
const userModel = new mongoose.model("User", userSchema);
export default userModel;
