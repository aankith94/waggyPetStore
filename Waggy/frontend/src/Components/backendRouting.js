const backendRouting = process.env.REACT_APP_BACKEND_URL;

const API = {
  SIGNUP: {
    url: `${backendRouting}/user/signup`,
    method: "post",
  },
  LOGIN: {
    url: `${backendRouting}/user/login`,
    method: "post",
  },
  FINDALL: {
    url: `${backendRouting}/user/findall`,
    method: "get",
  },
  VIEW: {
    url: `${backendRouting}/user/finduserbyparams`,
    method: "get",
  },
  DELETE: {
    url: `${backendRouting}/user/deleteuserbyparams`,
    method: "delete",
  },

  // product---------------------------------------------
  ALLPRODUCT: {
    url: `${backendRouting}/product/allproduct`,
    method: "get",
  },
  ADDPRODUCT: {
    url: `${backendRouting}/product/addproduct`,
    method: "post",
  },
  DELETEPRODUCT: {
    url: `${backendRouting}/product/deleteproductbyid`,
    method: "delete",
  },

  // cart------------------------------------------------
  ADDTOCART: {
    url: `${backendRouting}/cart/addtocart`,
    method: "post",
  },
  FETCHPRODUCT: {
    url: `${backendRouting}/cart/findallcart`,
    method: "get",
  },
};
export default API;
