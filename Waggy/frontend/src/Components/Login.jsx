import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "./backendRouting";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const inputfield = data.email?.trim();
      const isPhone = /^[0-9]{10}$/.test(inputfield);

      const payLoad = {
        password: data.password,
        ...(isPhone ? { phone: inputfield } : { email: inputfield }),
      };
      const dataa = await axios.post(API.LOGIN.url, payLoad);
      console.log(dataa, "dataaa");
      setData(dataa.data.body);
      if (dataa.data.status === 200) {
        toast.success(dataa.data.msg);
        navigate("/home");
        cookie.set("userInfo", JSON.stringify(dataa.data.body));
      } else {
        toast.error(dataa.data.msg);
      }
    } catch (error) {
      console.log(error, "login integration error");
      toast.error("login integration error");
    }
  };
  return (
    <section
      className="d-flex align-items-center justify-content-center pt-5 pb-5"
      style={{ backgroundColor: "#f9f3ec" }}
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
                <h2 className="fw-bold mt-3">Sign In to Waggy</h2>
                <p className="text-muted mb-0">
                  Welcome back! Please login to your account.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
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
                    placeholder="you@example.com"
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
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-decoration-none small text-primary"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 rounded-4 fw-semibold"
                >
                  Login
                </button>
                <div className="text-center my-3 text-muted">
                  or sign in with
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
                  <span className="text-muted">Don't have an account? </span>
                  <Link
                    to="/signup"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    Sign Up
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

export default Login;
