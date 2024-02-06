// // Createnotice.js
// import React from "react";
// import axios from "axios";
// import { useState } from "react";

// const Createnotice = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     link: "",
//     content: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("title", formData.title);
//       formDataToSend.append("link", formData.link);
//       formDataToSend.append("content", formData.content);

//       const response = await axios.post(
//         "/api/v1/general/createnotice",
//         formDataToSend
//       );

//       if (response.status === 201) {
//         console.log("Notice submitted successfully");
//         // Reset the form
//         setFormData({
//           title: "",
//           link: "",
//           content: "",
//         });
//       } else {
//         console.error("Error submitting notice");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form className="notice-form" onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleInputChange}
//           className="input-field"
//         />
//       </label>
//       <br />

//       <label>
//         Link:
//         <input
//           type="text"
//           name="link"
//           value={formData.link}
//           onChange={handleInputChange}
//           className="input-field"
//         />
//       </label>
//       <br />

//       <label>
//         Content:
//         <textarea
//           name="content"
//           value={formData.content}
//           onChange={handleInputChange}
//           className="input-field"
//         />
//       </label>
//       <br />

//       <button type="submit" className="submit-button">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Createnotice;

import React, { useState } from "react";
import axios from "axios";
import "./Createnotice.css";

const CreateNotice = () => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    pdf: null,
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const inputValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      pdf: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("link", formData.link);
      if (formData.pdf) {
        formDataToSend.append("pdf", formData.pdf);
      }
      formDataToSend.append("content", formData.content);

      const response = await axios.post(
        "/api/v1/general/createnotice",
        formDataToSend
      );

      if (response.status === 201) {
        console.log("Notice submitted successfully");
        // Reset the form
        setFormData({
          title: "",
          link: "",
          pdf: null,
          content: "",
        });
      } else {
        console.error("Error submitting notice");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Link:
        <input
          type="text"
          name="link"
          accept="application/pdf"
          value={formData.link}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Upload PDF:
        <input type="file" name="pdf" onChange={handleFileUpload} />
      </label>
      <br />

      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateNotice;
