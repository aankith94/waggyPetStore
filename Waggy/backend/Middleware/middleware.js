import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js";
const middleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token, "token");
    const tokenSplit = token.split(" ")[1];
    console.log(tokenSplit, "splitted token");

    const decodeToken = jwt.verify(tokenSplit, process.env.seckey);
    console.log(decodeToken, "generating unique id");
    if (decodeToken) {
      const userData = await userModel.findById({ _id: decodeToken.id });
      console.log(userData, "userrrr");
      if (userData.token !== tokenSplit) {
        return res.json({
          status: 400,
          success: false,
          msg: "please login First",
          body: {},
        });
      } else {
        req.userData = userData;
        next();
      }
    }
  } catch (error) {
    console.log(error, "middleware error");
    return res.json({
      status: 400,
      success: false,
      msg: "middleware error",
      body: {},
    });
  }
};
export default middleware;
