import React, { useEffect, useState } from "react";
import { FaEye, FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import API from "../backendRouting";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function ProductTable() {
  const [data, setData] = useState([]);

  const getProductData = async () => {
    try {
      const dataa = await axios.get(API.ALLPRODUCT.url, data);
      setData(dataa.data.body);
    } catch (error) {
      console.log(error, "getproductdata errror");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const deleteId = async (id) => {
    try {
      const dataa = await axios.delete(`${API.DELETEPRODUCT.url}/${id}`);

      console.log(dataa.data, "Deleted successfully");

      if (dataa.data.status === 200) {
        toast.success(dataa.data.msg);
        getProductData();
      } else {
        toast.error(dataa.data.msg);
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting");
    }
  };

  return (
    <section
      className="py-5"
      style={{ background: "#F9F3EC", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4 fw-bold mb-0">Product Table</h1>
          <Link to={"/addproduct"}>
            <button className="btn btn-primary d-flex align-items-center px-4 py-2 rounded-3 shadow-sm">
              <FaPlus className="me-2" /> Add Product
            </button>
          </Link>
        </div>
        <p className="fs-5 text-muted text-center mb-5">
          List of all products in your store.
        </p>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle bg-white rounded-4 shadow">
            <thead className="table-primary">
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {console.log(data)}
              {data.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "2px solid #DEAD6F",
                      }}
                      src={e.pic}
                    />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.category}</td>
                  <td>{e.price}</td>
                  <td>{e.quantity}</td>
                  <td>
                    <button className="btn btn-outline-primary me-2 px-4 py-2">
                      <FaEye className="me-1" /> View
                    </button>
                    <button className="btn btn-outline-warning me-2 px-4 py-2">
                      <FaEdit className="me-1" /> Edit
                    </button>
                    <button
                      className="btn btn-outline-danger px-4 py-2"
                      onClick={() => {
                        deleteId(e?._id);
                      }}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}

              {/* Add more static rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductTable;
