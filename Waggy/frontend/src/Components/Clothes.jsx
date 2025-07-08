import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "./backendRouting"; // Ensure this contains ALLPRODUCT.url
import Cookies from "js-cookie";
function Food() {
  const [data, setData] = useState([]);
  const getCookie = Cookies.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;
  const fetchData = async () => {
    try {
      const dataa = await axios.get(API.ALLPRODUCT.url);
      const filtered = dataa.data.body.filter(
        (item) => item.category.toLowerCase() === "clothes"
      );
      setData(filtered);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addItem = async (productIdd) => {
    try {
      const dataa = await axios.post(
        API.ADDTOCART.url,
        { productId: productIdd },
        {
          headers: {
            Authorization: `Bearer ${tokenn.token}`,
          },
        }
      );
      console.log(dataa, "add to cart item data");
    } catch (error) {
      console.log(error, "add item error");
    }
  };
  return (
    <section
      className="py-5"
      style={{ background: "#F9F3EC", minHeight: "100vh" }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-4 text-center">Pet Clothes</h1>
        <p className="fs-5 text-muted text-center mb-5">
          Dress up your pet in style—because cuteness deserves a wardrobe
        </p>

        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.pic}
                  className="img-fluid rounded-4"
                  alt={item.name}
                  style={{ height: "400px" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.name}</h5>
                  <p className="text-muted mb-2">{item.description}</p>
                  <h6 className="text-primary mb-3">${item.price}</h6>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                      addItem(item._id);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Food;
