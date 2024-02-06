import React, { useState, useEffect } from "react";
import axios from "axios";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("/api/v1/general/allnotices");
        setNotices(response.data.notices);
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
          responseType: "arraybuffer", // Set responseType to 'arraybuffer' to receive binary data
        }
      );

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
      window.open(url);

      // Create an anchor element
      const a = document.createElement("a");
      a.href = url;
      a.download = `notice_${title}.pdf`; // Set the filename for the downloaded file

      // Append the anchor element to the document body and trigger the click event
      document.body.appendChild(a);
      a.click();

      // Clean up by removing the anchor element and revoking the URL object
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Open the PDF in a new window/tab
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <h1>All Notices</h1>
      {notices.map((notice) => (
        <div key={notice._id}>
          <h2>{notice.title}</h2>
          {notice.link && <p>Link: {notice.link}</p>}
          <p>Content: {notice.content}</p>
          {notice.pdf && (
            <button onClick={() => downloadPDF(notice._id)}>
              Download PDF
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoticeList;
