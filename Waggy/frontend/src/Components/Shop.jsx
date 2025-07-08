import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "./backendRouting";
import Cookies from "js-cookie";
function Shop() {
  const [data, setData] = useState([]);
  const getCookie = Cookies.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataa = await axios.get(API.ALLPRODUCT.url);
        setData(dataa.data.body);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

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
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <h2 className="mb-4">Available Products</h2>
        <div className="row g-4">
          {data.length > 0 ? (
            data.map((product) => (
              <div className="col-md-3" key={product._id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.pic}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-primary fw-bold">
                      ₹{product.price}
                    </p>
                    <button
                      className="mt-auto btn btn-outline-dark btn-sm"
                      onClick={() => {
                        addItem(product._id);
                      }}
                    >
                      <i className="bi bi-cart-plus me-1"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No products available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Shop;
