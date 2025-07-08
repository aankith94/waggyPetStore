import userModel from "../Model/userModel.js";
import bcrypt from "bcrypt";
import Token from "../Token/tokenGen.js";
import imageUploader from "../Helper/imageUploader.js";
export const Signup = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const phone = req.body.phone?.trim();

    const query = [];
    if (email) {
      query.push({ email: new RegExp(`^${email}$`, "i") });
    }
    if (phone) {
      query.push({ phone });
    }
    if (query.length === 0) {
      console.log("please enter you email or phone");
      return res.json({
        status: 400,
        success: false,
        msg: "please enter valid email or phone",
        body: {},
      });
    }

    const findEmail = await userModel.findOne({ $or: query });
    // console.log(findEmail, "finding email");
    if (findEmail) {
      return res.json({
        status: 400,
        success: false,
        msg: "email already existed",
        body: {},
      });
    } else {
      console.log(req.files, "requesting files");

      if (req.files?.image?.name) {
        req.body.image = imageUploader(req.files.image, "userImage");
      }
      const passwordEnc = await bcrypt.hash(req.body.password, 10);

      console.log(passwordEnc, "encrypted password");
      const data = await userModel.create({
        ...req.body,
        password: passwordEnc,
      });

      const tokenCall = Token(data._id);
      data.token = tokenCall.tokenGen;
      data.loginTime = tokenCall.decode.iat;
      data.save();
      console.log(data, "data of the user");
      return res.json({
        status: 200,
        success: true,
        msg: "user created successfully",
        body: data,
      });
    }
  } catch (error) {
    console.log(error, "signup error");
    return res.json({
      status: 400,
      success: false,
      msg: "signup error",
      body: {},
    });
  }
};
export const Login = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const phone = req.body.phone?.trim();

    const query = [];
    if (email) {
      query.push({ email: new RegExp(`^${email}$`, "i") });
    }
    if (phone) {
      query.push({ phone });
    }
    // console.log(query, "query");
    if (query.length === 0) {
      console.log("please enter you email or phone");
      return res.json({
        status: 400,
        success: false,
        msg: "please enter valid email or phone",
        body: {},
      });
    }

    const findEmail = await userModel.findOne({ $or: query });
    if (!findEmail) {
      return res.json({
        status: 400,
        success: false,
        msg: "user does not exist",
        body: {},
      });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        findEmail.password
      );
      if (!passwordMatch) {
        return res.json({
          status: 400,
          success: false,
          msg: "incorrect information",
          body: {},
        });
      } else {
        const tokenCall = await Token(findEmail._id);
        findEmail.token = tokenCall.tokenGen;
        findEmail.loginTime = tokenCall.decode.iat;
        findEmail.save();
        console.log(findEmail, "userdata");
        return res.json({
          status: 200,
          success: true,
          msg: "login successful",
          body: findEmail,
        });
      }
    }
  } catch (error) {
    console.log(error, "login error");
    return res.json({
      status: 400,
      success: false,
      msg: "login error",
      body: {},
    });
  }
};
export const findAll = async (req, res) => {
  try {
    const allData = await userModel.find();
    const allUser = allData.map((e) => {
      return {
        ...e.toObject(),
        pic: `http://localhost:4444/Image/userImage/${e.image}`,
      };
    });
    return res.json({
      status: 200,
      success: true,
      msg: "all Data",
      body: allUser,
    });
  } catch (error) {
    console.log(error, "findall API error");
    return res.json({
      status: 400,
      success: false,
      msg: "findall api error",
      body: {},
    });
  }
};
export const findUserByParams = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    const allUser = {
      ...user.toObject(),
      pic: `http://localhost:4444/Image/userImage/${user.image}`,
    };
    return res.json({
      status: 200,
      success: true,
      msg: "user data",
      body: allUser,
    });
  } catch (error) {
    console.log(error, "findUserByParams error");

    return res.json({
      status: 400,
      success: false,
      msg: "findUserByParams error",
      body: {},
    });
  }
};
export const deleteUserByParams = async (req, res) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id);
    console.log(deleteUser, "deleted user data");
    return res.json({
      status: 200,
      success: true,
      msg: "delete data",
      body: deleteUser,
    });
  } catch (error) {
    console.log(error, "deleteUserByParams error");

    return res.json({
      status: 400,
      success: false,
      msg: "deleteUserByParams error",
      body: {},
    });
  }
};
