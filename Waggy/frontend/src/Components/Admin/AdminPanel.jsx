import React, { useState } from "react";
import UserTable from "./userTable"; // Apna component import
import ProductTable from "./productTable";
function AdminPanel() {
  const [activeTab, setActiveTab] = useState("users");

  // Function to get styles based on active tab
  const getButtonStyle = (tab) => ({
    textAlign: "left",
    border: "none",
    outline: "none",
    backgroundColor:
      activeTab === tab ? "rgba(255, 255, 255, 0.2)" : "transparent",
    color: "#fff",
    fontWeight: activeTab === tab ? "bold" : "normal",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "100%",
    transition: "background 0.3s, font-weight 0.3s",
  });

  const getHoverStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F9F3EC" }}>
      <div className="d-flex">
        {/* Sidebar */}
        <aside
          className="bg-dark text-white p-4"
          style={{
            width: "240px",
            minHeight: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
          <h2 className="h4 fw-bold mb-4">Admin Panel</h2>
          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <button
                className="d-flex align-items-center gap-2"
                style={getButtonStyle("users")}
                onMouseOver={(e) =>
                  Object.assign(e.target.style, getHoverStyle)
                }
                onMouseOut={(e) =>
                  Object.assign(e.target.style, getButtonStyle("users"))
                }
                onClick={() => setActiveTab("users")}
              >
                <i className="bi bi-people"></i> Users
              </button>
            </li>
            <li className="nav-item">
              <button
                className="d-flex align-items-center gap-2"
                style={getButtonStyle("products")}
                onMouseOver={(e) =>
                  Object.assign(e.target.style, getHoverStyle)
                }
                onMouseOut={(e) =>
                  Object.assign(e.target.style, getButtonStyle("products"))
                }
                onClick={() => setActiveTab("products")}
              >
                <i className="bi bi-box-seam"></i> Products
              </button>
            </li>

            <li className="nav-item">
              <button
                className="d-flex align-items-center gap-2"
                style={getButtonStyle("analytics")}
                onMouseOver={(e) =>
                  Object.assign(e.target.style, getHoverStyle)
                }
                onMouseOut={(e) =>
                  Object.assign(e.target.style, getButtonStyle("analytics"))
                }
                onClick={() => setActiveTab("analytics")}
              >
                <i className="bi bi-bar-chart"></i> Analytics
              </button>
            </li>

            <li className="nav-item">
              <button
                className="d-flex align-items-center gap-2"
                style={getButtonStyle("settings")}
                onMouseOver={(e) =>
                  Object.assign(e.target.style, getHoverStyle)
                }
                onMouseOut={(e) =>
                  Object.assign(e.target.style, getButtonStyle("settings"))
                }
                onClick={() => setActiveTab("settings")}
              >
                <i className="bi bi-gear"></i> Settings
              </button>
            </li>

            <li className="nav-item mt-4">
              <button
                className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={() => alert("Logged out!")}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow-1 p-4">
          <header className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h4 fw-bold text-dark">
              {activeTab === "users"
                ? "User Management"
                : activeTab === "analytics"
                ? "Analytics Dashboard"
                : activeTab === "products"
                ? "Product Management"
                : "Admin Settings"}
            </h1>
            <span className="text-muted">Welcome, Admin</span>
          </header>

          <div className="bg-white p-4 rounded shadow-sm">
            {activeTab === "users" && <UserTable />}
            {activeTab === "products" && <ProductTable />}
            {activeTab === "analytics" && (
              <p>📊 Analytics section is under construction...</p>
            )}
            {activeTab === "settings" && (
              <p>⚙️ Settings section will be added soon.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
