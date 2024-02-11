// export default NoticeList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import "./Homepage.css";
// import image from "./foodimages/food.jpg";
import { FoodImages } from "./foodimages/foodimagelist";
import { Card } from "react-bootstrap";
import Footer from "../components/Layout/Footer";
import Button from "@mui/material/Button";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("/api/v1/general/allnotices");
        // Sort notices by creation timestamp (assuming 'createdAt' field exists)
        const sortedNotices = response.data.notices.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 1
        );
        setNotices(sortedNotices);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const downloadPDF = async (noticeId, title) => {
    try {
      const response = await axios.get(
        `/api/v1/general/downloadpdf/${noticeId}`,
        {
          responseType: "arraybuffer",
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url);
      const a = document.createElement("a");
      a.href = url;
      a.download = `notice_${title}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <Layout>
      <div className="notice-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ fontWeight: "bold" }}>All Notices</h1>
        </div>
        <div className="notice-list">
          {notices.map((notice) => (
            <div className="notice-item" key={notice._id}>
              <h4>
                {" "}
                {notice.title.split(" ").slice(0, 3).join(" ")}
                {notice.title.split(" ").length > 3 && "..."}
              </h4>
              <hr />
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    fontSize: "0.8rem",
                    margin: "0",
                    marginRight: "5px",
                  }}
                >
                  Link:
                </p>
                {notice.link && (
                  <p style={{ fontSize: "0.8rem", margin: "0" }}>
                    <a href={notice.link}>{notice.link}</a>
                  </p>
                )}
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "7px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8rem",
                    margin: "0",
                    marginRight: "5px",
                  }}
                >
                  Content:
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    margin: "0",
                    fontWeight: "normal",
                    overflowX: "auto", // Enable horizontal scrolling
                    whiteSpace: "nowrap", // Prevent line breaks
                    maxWidth: "calc(100% - 50px)", // Limit maximum width to avoid overflow
                    WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS devices
                    scrollbarWidth: "thin", // Set the scrollbar width to thin
                    scrollbarColor: "rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)", // Set the scrollbar track and thumb colors
                  }}
                >
                  {notice.content}
                </p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {notice.pdf && (
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      height: "15px",
                      marginTop: "2px",
                      marginBottom: "5px",
                    }}
                    onClick={() => downloadPDF(notice._id, notice.title)}
                  >
                    PDF
                  </Button>
                )}
              </div>
              <p style={{ fontSize: "0.6rem" }}>
                {new Date(notice.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          {" "}
          Gallery & Cuisines 😋
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap", // Allow cards to wrap to the next row
            gap: "16px", // Spacing between cards
          }}
        >
          {/* Map over the FoodImages array */}
          {FoodImages.map((food, index) => (
            <div
              key={index}
              style={{
                width: "calc(33.33% - 16px)", // Adjust width for 3 cards in a row with spacing
                padding: "8px",
                boxSizing: "border-box",
              }}
            >
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                  borderRadius: "35%", // Make the card circular
                  overflow: "hidden", // Ensure content inside the card doesn't overflow
                }}
              >
                {/* Access the image URL from each object */}
                <img
                  src={Object.values(food)[0]}
                  style={{ width: "100%", height: "auto" }}
                  alt={`Food ${index + 1}`}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#99E54D",
          height: "100px",
          width: "100%",
          display: "flex",
          flexDirection: "column", // Set flex direction to column
          justifyContent: "center",
          // alignItems: "left",
          marginTop: "40px",
          marginBottom: "30px",
          padding: "2px",
        }}
      >
        <div style={{ overflowX: "hidden" }}>
          <h2
            style={{
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              marginBottom: "5px",
              marginLeft: "50px",
              whiteSpace: "nowrap", // Prevent line breaks
              overflow: "hidden", // Hide overflowed text
              animation: "marquee 25s linear infinite", // Apply the animation
            }}
          >
            Please Keep Visiting ! Enjoy, Your Meal & Stay healthy ...😊
          </h2>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default NoticeList;
