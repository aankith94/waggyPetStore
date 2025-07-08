import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Aboutus from "./Components/Aboutus";
import Clothes from "./Components/Clothes";
import Food from "./Components/Food";
import Toys from "./Components/Toys";

import { ToastContainer } from "react-toastify";

import View from "./Components/View";
import AdminPanel from "./Components/Admin/AdminPanel";
import UserTable from "./Components/Admin/userTable";
import ProductTable from "./Components/Admin/productTable";
import AddProduct from "./Components/Admin/addProduct";
import Cart from "./Components/Admin/Cart";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/food" element={<Food />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/table" element={<UserTable />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/producttable" element={<ProductTable />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
