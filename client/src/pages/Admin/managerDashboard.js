

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../user/Dashboard.css"
import axios from "axios";
import Layout from "../../components/Layout/Layout";

const ManagerDashboard = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Fetch menu data from your backend API
    axios
      .get("/api/v1/auth/getmenu") // Replace with the actual API endpoint
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Manager Panel</h1>
      {/* <div
        style={{
          backgroundColor: "#f4f4f4",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px 30px",
          margin: "0 30px",
          textAlign: "center", // Center-align the content within the card
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "space-around",
            margin: "5px 0",
          }}
        >
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/manager/updatemenu"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Update Mess Menu
              </button>
            </NavLink>
          </div>
          <div style={{ width: "30%", marginBottom: "10px" }}>
            <NavLink
              to="/dashboard/manager/recipe"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{
                  width: "100%", // Set the button width to 100%
                  padding: "10px 20px", // Adjusted padding for a smaller button
                  boxSizing: "border-box", // Ensure padding is included in the total width
                }}
              >
                Recipe
              </button>
            </NavLink>
          </div>
        </div>
      </div> */}

<div className="ag-format-container">

<div className="ag-courses_box">

      {/* card1 */}

<div className="ag-courses_item">
<Link to="/dashboard/manager/updatemenu" className="ag-courses-item_link">
  <div className="ag-courses-item_bg" />
  <div className="ag-courses-item_title">
    Update Mess Menu...
  </div>
  <div className="ag-courses-item_date-box">
   
    <span className="ag-courses-item_date">
    Update mess menu Here!!!
    </span>
  </div>
</Link>
</div>


{/* card2 */}

<div className="ag-courses_item">
<Link to="/dashboard/manager/recipe" className="ag-courses-item_link">
  <div className="ag-courses-item_bg" />
  <div className="ag-courses-item_title">
   CheckOut Recipe...
  </div>
  <div className="ag-courses-item_date-box">
   
    <span className="ag-courses-item_date">
    Explore New Recipes Here!!!
    </span>
  </div>
</Link>
</div>

</div>
</div>

    </Layout>
  );
};
export default ManagerDashboard;