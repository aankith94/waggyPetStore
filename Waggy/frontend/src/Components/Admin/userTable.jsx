import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import cookie from "js-cookie";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../backendRouting";

function UserTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getCookie = cookie.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;

  const getData = async () => {
    try {
      const dataa = await axios.get(`${API.FINDALL.url}`, {
        headers: {
          authorization: `Bearer ${tokenn.token}`,
        },
      });
      console.log(dataa, "data");
      setData(dataa.data.body);
    } catch (error) {
      console.log(error, "error table ");
    }
  };
  const deleteId = async (id) => {
    try {
      const dataa = await axios.delete(`${API.DELETE.url}/${id}`);

      console.log(dataa.data, "Deleted successfully");

      if (dataa.data.status === 200) {
        toast.success(dataa.data.msg);
        getData();
      } else {
        toast.error(dataa.data.msg);
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getId = (id) => {
    navigate(`/view/${id}`);
  };
  return (
    <section
      className="py-5"
      style={{ background: "#F9F3EC", minHeight: "100vh" }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold mb-4 text-center">User Table</h1>
        <p className="fs-5 text-muted text-center mb-5">
          List of all registered users.
        </p>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle bg-white rounded-4 shadow">
            <thead className="table-primary">
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Profile</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {console.log(data, "dataaa")}
              {data.map((e, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #DEAD6F",
                      }}
                      src={e?.pic}
                    />
                  </td>
                  <td>{e?.name}</td>
                  <td>{e?.email || e?.phone}</td>
                  <td>
                    <button
                      className="btn  btn-outline-primary me-2 px-5 py-3"
                      onClick={() => {
                        getId(e?._id);
                      }}
                    >
                      <FaEye size={16} className="me-1" /> View
                    </button>
                    <button
                      className="btn btn-outline-danger px-5 py-3"
                      onClick={() => {
                        deleteId(e?._id);
                      }}
                    >
                      <FaTrash size={16} className="me-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default UserTable;
