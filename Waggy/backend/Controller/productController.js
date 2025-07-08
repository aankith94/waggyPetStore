import productModel from "../Model/productModel.js";
import imageUploader from "../Helper/imageUploader.js";
export const addProduct = async (req, res) => {
  try {
    const existingProduct = await productModel.findOne({ name: req.body.name });
    if (existingProduct) {
      return res.json({
        status: 400,
        success: false,
        msg: "this product is already existed",
        body: {},
      });
    } else {
      console.log(req.files, "filessss");
      if (req.files?.image?.name) {
        req.body.image = imageUploader(req.files.image, "productImage");
      }
      const productCreation = await productModel.create(req.body);
      console.log(productCreation, "product");
      return res.json({
        status: 200,
        success: true,
        msg: "product successfully added",
        body: productCreation,
      });
    }
  } catch (error) {
    console.log(error, "addProduct error");
    return res.json({
      status: 500,
      msg: "interal server error add product",
    });
  }
};

export const allProduct = async (req, res) => {
  try {
    const allData = await productModel.find();
    const allUser = allData.map((e) => {
      return {
        ...e.toObject(),
        pic: `http://localhost:4444/Image/productImage/${e.image}`,
      };
    });
    return res.json({
      status: 200,
      sucess: true,
      msg: "fetching all data",
      body: allUser,
    });
  } catch (error) {
    console.log(error, "allProduct error");
    return res.json({
      status: 500,
      msg: "internal server error",
    });
  }
};

export const findProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.json({
        status: 400,
        success: false,
        msg: "searched product does not exist",
        body: {},
      });
    }
    return res.json({
      status: 200,
      success: true,
      msg: "product fetched successfully",
      body: product,
    });
  } catch (error) {
    console.log(error, "findProductById errror");
    return res.json({
      status: 500,
      success: false,
      msg: "internal server error",
      body: {},
    });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.json({
      status: 200,
      success: true,
      msg: "product updated successfully",
      body: updateProduct,
    });
  } catch (error) {
    console.log(error, "product updation error");
    return res.json({
      status: 500,
      success: false,
      msg: "internal server error",
      body: {},
    });
  }
};
export const deleteProductById = async (req, res) => {
  try {
    const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
    return res.json({
      status: 200,
      success: true,
      msg: "user Deleted Successfully",
      body: deleteProduct,
    });
  } catch (error) {
    console.log(error, "error in delete product");
    return res.json({
      status: 200,
      success: false,
      msg: "internal server error",
      body: {},
    });
  }
};
