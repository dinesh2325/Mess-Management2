// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";

// const Viewfeedback = () => {
//   const [feedback, setFeedback] = useState([]);
//   const [totalStudent, setTotalStudent] = useState(0);
//   const [totalFeedback, setTotalFeedback] = useState(0);
//   const [totalFoodRating, setTotalFoodRating] = useState(0);
//   const [totalServiceRating, setTotalServiceRating] = useState(0);

//   const getFeedback = async () => {
//     try {
//       const response = await axios.get("/api/v1/general/viewfeedback");
//       setFeedback(response.data);

//       // Calculate totals and counts
//       setTotalFeedback(response.data.length);
//       setTotalStudent(
//         response.data.reduce((total, item) => {
//           // Assuming each student gives feedback only once
//           return total + (item.name ? 1 : 0);
//         }, 0)
//       );

//       setTotalFoodRating(
//         response.data.reduce((total, item) => {
//           return total + (item.foodRating ? parseInt(item.foodRating) : 0);
//         }, 0)
//       );

//       setTotalServiceRating(
//         response.data.reduce((total, item) => {
//           return (
//             total + (item.serviceRating ? parseInt(item.serviceRating) : 0)
//           );
//         }, 0)
//       );
//     } catch (error) {
//       console.error("Error fetching feedback data:", error);
//     }
//   };

//   useEffect(() => {
//     getFeedback();
//     // eslint-disable-next-line
//   }, []);

//   return (
//   <div>
//     <h1 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>Upcoming Feedback</h1>

//     {totalFeedback === 0 ? (
//       <p>No upcoming feedback available</p>
//     ) : (
//       <div>
//         <Card style={{ padding: "20px", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", border: "2px solid #ccc", borderRadius: "8px", fontWeight: "bold" , marginLeft: "20px", marginRight: "20px"}}>
//           <p style={{textDecoration:"underline"}}>Total Students: {totalStudent}</p>
//           <p style={{textDecoration:"underline"}}>Total Feedback: {totalFeedback}</p>
//           <p style={{textDecoration:"underline"}}>Average Food Rating: {totalFoodRating / totalFeedback} (out of 5)</p>
//           <p style={{textDecoration:"underline"}}>Average Service Rating: {totalServiceRating / totalFeedback} (out of 5)</p>
//         </Card>

//         <ul>
//           {feedback.map((item) => (
//             <li key={item._id}>
//               <Card
//                 style={{
//                   padding: "20px",
//                   marginBottom: "20px",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                   border: "2px solid #ccc",
//                   borderRadius: "8px",
//                 }}
//               >
//                 <strong>Name: {item.name}</strong>
//                 <br />
//                 <strong>Food Rating: {item.foodRating}</strong>
//                 <br />
//                 <strong>Service Rating: {item.serviceRating}</strong>
//                 <br />
//                 <strong>Feedback:  {item.feedback}</strong>
//               </Card>
//               <hr />
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
// );
// };

// export default Viewfeedback;

//2...
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "react-bootstrap";
// import { PieChart } from "@mui/x-charts/PieChart";
// import { deepPurple, purple } from "@mui/material/colors";

// const Viewfeedback = () => {
//   const [feedback, setFeedback] = useState([]);
//   const [totalStudent, setTotalStudent] = useState(0);
//   const [totalFeedback, setTotalFeedback] = useState(0);
//   const [totalFoodRating, setTotalFoodRating] = useState(0);
//   const [totalServiceRating, setTotalServiceRating] = useState(0);

//   const getFeedback = async () => {
//     try {
//       const response = await axios.get("/api/v1/general/viewfeedback");
//       setFeedback(response.data);

//       setTotalFeedback(response.data.length);
//       setTotalStudent(
//         response.data.reduce((total, item) => {
//           return total + (item.name ? 1 : 0);
//         }, 0)
//       );

//       setTotalFoodRating(
//         response.data.reduce((total, item) => {
//           return total + (item.foodRating ? parseInt(item.foodRating) : 0);
//         }, 0)
//       );

//       setTotalServiceRating(
//         response.data.reduce((total, item) => {
//           return (
//             total + (item.serviceRating ? parseInt(item.serviceRating) : 0)
//           );
//         }, 0)
//       );
//     } catch (error) {
//       console.error("Error fetching feedback data:", error);
//     }
//   };

//   useEffect(() => {
//     getFeedback();
//     // eslint-disable-next-line
//   }, []);

//   // Calculate the average food rating in percentage
//   const averageFoodRatingPercentage =
//     (totalFoodRating / totalFeedback / 5.0) * 100;

//   // Calculate the remaining food rating percentage
//   const remainingFoodRatingPercentage = 100 - averageFoodRatingPercentage;

//   // Calculate the average service rating in percentage
//   const averageServiceRatingPercentage =
//     (totalServiceRating / totalFeedback / 5.0) * 100;

//   // Calculate the remaining service rating percentage
//   const remainingServiceRatingPercentage = 100 - averageServiceRatingPercentage;

//   return (
//     <div>
//       <h1
//         style={{
//           textAlign: "center",
//           marginBottom: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         Upcoming Feedback
//       </h1>

//       {totalFeedback === 0 ? (
//         <p>No upcoming feedback available</p>
//       ) : (
//         <div>
//           <Row>
//             {/* Display the Average Food Rating Pie Chart */}
//             <Col md={6}>
//               <PieChart
//                 series={[
//                   {
//                     data: [
//                       {
//                         id: 0,
//                         value: averageFoodRatingPercentage,
//                         label: "Avg Food Rating (%)",
//                         color: "#FF9800", // Choose a color for average food rating
//                       },
//                       {
//                         id: 1,
//                         value: remainingFoodRatingPercentage,
//                         label: "Remaining",
//                         color: "#00b8d4",
//                       },
//                     ],
//                   },
//                 ]}
//                 height={250}
//               />
//             </Col>

//             {/* Display the Average Service Rating Pie Chart */}
//             <Col md={6}>
//               <PieChart
//                 series={[
//                   {
//                     data: [
//                       {
//                         id: 0,
//                         value: averageServiceRatingPercentage,
//                         label: "Avg Service Rating (%)",
//                         color: "#FF5722", // Choose a color for average service rating
//                       },
//                       {
//                         id: 1,
//                         value: remainingServiceRatingPercentage,
//                         label: "Remaining",
//                         color: "#3498db", // Choose a color for the remaining part
//                       },
//                     ],
//                   },
//                 ]}
//                 height={250}
//               />
//             </Col>
//           </Row>

//           <ul>
//             {feedback.map((item) => (
//               <li key={item._id}>
//                 <Card
//                   style={{
//                     padding: "20px",
//                     width: "400px",
//                     marginBottom: "20px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                     border: "2px solid #ccc",
//                     borderRadius: "8px",
//                   }}
//                 >
//                   <strong>Name: {item.name || "No Name"}</strong>
//                   <br />
//                   <strong>Food Rating: {item.foodRating}</strong>
//                   <br />
//                   <strong>Service Rating: {item.serviceRating}</strong>
//                   <br />
//                   <strong>Feedback: {item.feedback}</strong>
//                   <br />
//                   {/* Display individual student average ratings */}
//                   <strong>
//                     Average Food Rating:{" "}
//                     {item.foodRating
//                       ? (
//                           (parseInt(item.foodRating) / totalFeedback / 5.0) *
//                           100
//                         ).toFixed(2)
//                       : "N/A"}{" "}
//                     %
//                   </strong>
//                   <br />
//                   <strong>
//                     Average Service Rating:{" "}
//                     {item.serviceRating
//                       ? (
//                           (parseInt(item.serviceRating) / totalFeedback / 5.0) *
//                           100
//                         ).toFixed(2)
//                       : "N/A"}{" "}
//                     %
//                   </strong>
//                 </Card>
//                 <hr />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Viewfeedback;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { deepPurple, purple } from "@mui/material/colors";
import "./../user/viewuser.css";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Viewfeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [totalFoodRating, setTotalFoodRating] = useState(0);
  const [totalServiceRating, setTotalServiceRating] = useState(0);

  const getFeedback = async () => {
    try {
      const response = await axios.get("/api/v1/general/viewfeedback");
      setFeedback(response.data);

      setTotalFeedback(response.data.length);
      setTotalStudent(
        response.data.reduce((total, item) => {
          return total + (item.name ? 1 : 0);
        }, 0)
      );

      setTotalFoodRating(
        response.data.reduce((total, item) => {
          return total + (item.foodRating ? parseInt(item.foodRating) : 0);
        }, 0)
      );

      setTotalServiceRating(
        response.data.reduce((total, item) => {
          return (
            total + (item.serviceRating ? parseInt(item.serviceRating) : 0)
          );
        }, 0)
      );
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };

  useEffect(() => {
    getFeedback();
    // eslint-disable-next-line
  }, []);

  // Calculate the average food rating in percentage
  const averageFoodRatingPercentage =
    (totalFoodRating / totalFeedback / 5.0) * 100;

  // Calculate the remaining food rating percentage
  const remainingFoodRatingPercentage = 100 - averageFoodRatingPercentage;

  // Calculate the average service rating in percentage
  const averageServiceRatingPercentage =
    (totalServiceRating / totalFeedback / 5.0) * 100;

  // Calculate the remaining service rating percentage
  const remainingServiceRatingPercentage = 100 - averageServiceRatingPercentage;

  const lightBlueShades = [
    "#336BFF",
    "#33FFD4",
    "#9F33FF",
    "#FF33E6",
    "#ADD8E6",
    "#87CEEB",
    "#00BFFF",
    "#1E90FF",
    "#6495ED",
  ];

  const FoodData = [
    {
      data: [
        {
          id: 0,
          value: averageFoodRatingPercentage,
          name: "positive Food Rating (%)",
          color: "#336BFF",
        },
        {
          id: 1,
          value: remainingFoodRatingPercentage,
          name: "negative Food Rating (%)",
          color: "#33FFD4",
        },
      ],
    },
  ];

  const ServiceData = [
    {
      data: [
        {
          id: 0,
          value: averageServiceRatingPercentage,
          name: "Avg Service Rating (%)",
          color: "#9F33FF", // Choose a color for average service rating
        },
        {
          id: 1,
          value: remainingServiceRatingPercentage,
          name: "negative Food Rating (%)",
          color: "#FF33E6", // Choose a color for the remaining part
        },
      ],
    },
  ];

  return (
    <div style={{ margin: "auto" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Upcoming Feedback
      </h1>

      {totalFeedback === 0 ? (
        <p>No upcoming feedback available</p>
      ) : (
        <div>
          <Row className="justify-content-center">
            {/* Display the Average Food Rating Pie Chart */}
            <Col
              md={6}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "20px",
                marginRight: 30,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                padding: "20px",
                minWidth: "300px",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <PieChart width={300} height={300}>
                <Pie
                  data={FoodData[0].data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {FoodData[0].data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Col>

            {/* Display the Average Service Rating Pie Chart */}
            <Col
              md={6}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "20px",
                marginLeft: 30,
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                minWidth: "300px",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <PieChart width={300} height={300}>
                <Pie
                  data={ServiceData[0].data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {ServiceData[0].data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {feedback.map((item, index) => (
              <Col key={index} md={4} className="mb-4">
                <div
                  className="flip-card"
                  style={{
                    width: 400,
                    margin: "0 auto", // Center the card horizontally
                  }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <p className="title"></p>
                      <strong>Name: {item.name || "No Name"}</strong>
                      <br />
                      <strong>Food Rating: {item.foodRating}</strong>
                      <br />
                      <strong>Service Rating: {item.serviceRating}</strong>
                    </div>
                    <div className="flip-card-back">
                      <p className="title"></p>
                      <strong>Feedback: {item.feedback}</strong>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Viewfeedback;
