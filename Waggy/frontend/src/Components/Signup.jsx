import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "./backendRouting";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// Optional for extra styles

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    userType: "",
    secretKey: "",
  });

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
    if (data.userType === "Admin" && data.secretKey !== "payal0724") {
      toast.error("Invalid Admin");
    } else {
      try {
        const formData = new FormData();
        formData.append("name", data.name);

        formData.append("password", data.password);
        formData.append("image", data.image);
        formData.append("userType", data.userType);
        if (data.userType === "Admin") {
          formData.append("secretKey", data.secretKey);
        }
        const inputfield = data.email.trim();
        const isPhone = /^[0-9]{10}$/.test(inputfield);

        if (isPhone) {
          formData.append("phone", inputfield);
        } else {
          formData.append("email", inputfield);
        }
        const dataa = await axios.post(API.SIGNUP.url, formData);
        console.log(dataa, "datttttttttttta");
        setData(dataa.data.body);

        if (dataa.data.status === 200) {
          toast.success(dataa.data.msg);
          navigate("/login");
        } else {
          toast.error(dataa.data.msg);
        }
      } catch (error) {
        console.log(error, "signup integration error");
        toast.error("signup integration error");
      }
    }
  };
  return (
    <section
      className="d-flex align-items-center justify-content-center pb-5 pt-5"
      style={{ backgroundColor: "#f9f3ec", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card border-0 shadow-lg rounded-5 p-4 p-md-5">
              <div className="text-center mb-4">
                <img
                  src="images/logo.png"
                  alt="Waggy Logo"
                  style={{ width: 80 }}
                  className="img-fluid"
                />
                <h2 className="fw-bold mt-3">Create Your Account</h2>
                <p className="text-muted mb-0">
                  Sign up to start shopping for your pets!
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold me-3">
                    Register As
                  </label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    // className="form-control rounded-4"
                    name="userType"
                    value="User"
                  />
                  <label htmlFor="name" className="form-label fw-semibold me-3">
                    User
                  </label>

                  <input
                    onChange={handleChange}
                    type="radio"
                    // className="form-control rounded-4"
                    name="userType"
                    value="Admin"
                  />
                  <label htmlFor="name" className="form-label fw-semibold">
                    Admin
                  </label>
                </div>
                {data.userType === "Admin" ? (
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Secret Key
                    </label>
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control rounded-4"
                      name="secretKey"
                      // value={data.secretkey}
                      placeholder="Enter your secret key"
                      required
                    />
                  </div>
                ) : null}

                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control rounded-4"
                    name="name"
                    value={data.name}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control rounded-4"
                    name="email"
                    value={data.email}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    className="form-control rounded-4"
                    name="password"
                    value={data.password}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label fw-semibold">
                    image
                  </label>
                  <input
                    onChange={handleChange}
                    type="file"
                    name="image"
                    className="form-control rounded-4"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 rounded-4 fw-semibold mb-3"
                >
                  Sign Up
                </button>
                <div className="text-center text-muted my-3">
                  or sign up with
                </div>
                <div className="d-flex justify-content-center gap-3 mb-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "42px", height: "42px" }}
                  >
                    <iconify-icon icon="mdi:google" width="20" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "42px", height: "42px" }}
                  >
                    <iconify-icon icon="mdi:facebook" width="20" />
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <Link
                    to="/login"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
