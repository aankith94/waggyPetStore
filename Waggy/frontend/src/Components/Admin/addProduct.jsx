import { useState } from "react";
import API from "../backendRouting";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import cookie from "js-cookie";
function AddProduct() {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    quantity: "",
  });
  const getCookie = cookie.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;

  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target);
    if (e.target.name === "image") {
      setData({ ...data, [e.target.name]: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("quantity", data.quantity);
      formData.append("image", data.image);
      formData.append("price", data.price);

      const dataa = await axios.post(API.ADDPRODUCT.url, formData, {
        headers: {
          authorization: `Bearer ${tokenn.token}`,
        },
      });
      console.log(dataa, "datttttttttttta");
      setData(dataa.data.body);

      if (dataa.data.status === 200) {
        toast.success(dataa.data.msg);
        navigate("/producttable");
      } else {
        toast.error(dataa.data.msg);
      }
    } catch (error) {
      console.log(error, "product addition error");
      toast.error("product addition  error");
    }
  };
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#F9F3EC", // Light cream background
          color: "#2c2c2c",
        }}
      >
        <h3
          className="text-center fw-bold mb-4"
          style={{ color: "#5A4B36" }} // Deep heading
        >
          Add New Product
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-3 bg-white border-0 shadow-sm"
              name="name"
              value={data.name}
              placeholder="Product Name"
              onChange={handleChange}
            />
            <label htmlFor="productName">Product Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-3 bg-white border-0 shadow-sm"
              name="description"
              value={data.description}
              id="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-3 bg-white border-0 shadow-sm"
              name="category"
              value={data.category}
              id="category"
              placeholder="Category"
              onChange={handleChange}
            />
            <label htmlFor="category">Category</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control rounded-3 bg-white border-0 shadow-sm"
              name="price"
              value={data.price}
              placeholder="Price"
              onChange={handleChange}
            />
            <label htmlFor="price">Price (₹)</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control rounded-3 bg-white border-0 shadow-sm"
              name="quantity"
              value={data.quantity}
              placeholder="Stock"
              onChange={handleChange}
            />
            <label htmlFor="stock">Stock</label>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="form-label fw-semibold">
              Upload Product Image
            </label>
            <input
              type="file"
              className="form-control rounded-3 border-0 shadow-sm bg-white"
              name="image"
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="reset"
              className="btn px-4 py-2 rounded-3"
              style={{
                background: "#e0d5c0",
                color: "#333",
                border: "none",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn px-4 py-2 rounded-3"
              style={{
                background: "#DEAD6F",
                color: "#fff",
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
