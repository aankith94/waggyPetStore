import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./backendRouting";
import axios from "axios";
function View() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getData = async () => {
    try {
      const dataa = await axios.get(`${API.VIEW.url}/${id}`);
      console.log(dataa, "dataaaattat");
      setData(dataa.data.body);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section
      className="py-5"
      style={{ background: "#F9F3EC", minHeight: "100vh" }}
    >
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div
          className="card shadow-lg p-4 rounded-4"
          style={{ maxWidth: 400, width: "100%" }}
        >
          <div className="d-flex flex-column align-items-center">
            <img
              src={data?.pic}
              alt="User"
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid #DEAD6F",
                marginBottom: 24,
              }}
            />
            <h2 className="fw-bold mb-2">{data?.name}</h2>
            <p className="text-muted fs-5 mb-0">{data?.email || data?.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
