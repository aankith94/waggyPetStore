import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const data = await mongoose.connect(process.env.dbURL);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error, "database connection error");
  }
};
export default dbConnection;
