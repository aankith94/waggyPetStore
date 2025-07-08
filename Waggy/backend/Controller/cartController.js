import cartModel from "../Model/cartModel.js";

export const cartCreate = async (req, res) => {
  try {
    const dataa = await cartModel.create({
      userId: req.userData.id,
      productId: req.body.productId,
    });

    // const populatedData = await cartModel
    //   .findById(dataa._id)
    //   .populate("productId");

    return res.json({
      status: 200,
      success: true,
      msg: "product added successfully",
      body: dataa,
    });
  } catch (error) {
    console.log(error, "error in add to cart");
    res.status(500).json({ success: false, msg: "Something went wrong" });
  }
};

export const findAllCart = async (req, res) => {
  try {
    const dataa = await cartModel
      .find({ userId: req.userData.id })
      .populate("userId")
      .populate("productId");
    console.log(dataa, "find all item to the cart");

    // const allUser = dataa.map((e) => {
    //   return {
    //     ...e.toObject(),
    //     pic: `http://localhost:4444/Image/productImage/${e.image}`,
    //   };
    // });

    return res.json({
      status: 200,
      success: true,
      msg: "item fetched successfully",
      body: dataa,
    });
  } catch (error) {
    console.log(error, "error in  find all cart item");
  }
};
export const updateCart = async (req, res) => {
  try {
    const dataa = await cartModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    // console.log(dataa, "product updated");
    return res.json({
      status: 200,
      success: true,
      msg: "Quantity updated successfully",
      body: dataa,
    });
  } catch (error) {
    console.log(error, "error in updating cart");
  }
};

export const deleteSingleCartItem = async (req, res) => {
  try {
    const dataa = await cartModel.findByIdAndDelete({ _id: req.params.id });
    // console.log(dataa, "item deleted successfully");

    return res.json({
      status: 200,
      success: true,
      msg: "item deleted successfully",
      body: dataa,
    });
  } catch (error) {
    console.log(error, "error in deleteSingleCartItem ");
  }
};

export const deleteAllCartItem = async (req, res) => {
  try {
    const dataa = await cartModel.delete();
    // console.log(dataa, "item deleted successfully");

    return res.json({
      status: 200,
      success: true,
      msg: "item deleted successfully",
      body: dataa,
    });
  } catch (error) {
    console.log(error, "deleteAllCartItem");
  }
};
