// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useAuth } from "../../context/auth";

// const Viewpoll = () => {
//   const navigate = useNavigate();
//   const [auth, setAuth] = useAuth();
//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState([{ id: "", options: "", count: "" }]);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [pollId, setPollId] = useState("");
//   const [validuser, setValidUser] = useState(0);
//   const username = auth?.user?.name;

//   useEffect(() => {
//     // Fetch existing poll data if pollId is provided

//     const fetchPollData = async () => {
//       try {
//         const response = await axios.get("/api/v1/general/getPoll");
//         const pollData = response.data; // Assuming your backend provides poll data
//         setQuestion(pollData.question);
//         setOptions(pollData.options);
//         setPollId(pollData._id);
//         const userExists = pollData.votedUsers.includes(username);
//         if (userExists) {
//           setValidUser(1);
//         }
//       } catch (error) {
//         console.error("Error fetching poll data:", error);
//         // Handle errors here
//       }
//     };
//     fetchPollData();
//   }, []);

//   // when submit button is clicked
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(options[selectedOption]);
//     try {
//       const response = await axios.post("/api/v1/general/submitPoll", {
//         selectedOption: options[selectedOption],
//         username,
//       });
//       console.log("Poll updated successfully:", response.data);
//       navigate("/dashboard/student");
//     } catch (error) {
//       console.error("Error submitting poll:", error);
//     }
//   };
//   console.log(`your id is${validuser}`);
//   return (
//     <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
//       {validuser === 0 && pollId ? (
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             padding: "20px",
//             boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <label
//             htmlFor="question"
//             style={{ display: "block", marginBottom: "8px" }}
//           >
//             Poll Question:
//           </label>
//           <p>{question}</p>
//           <hr />
//           <label
//             htmlFor="options"
//             style={{ display: "block", marginBottom: "8px" }}
//           >
//             Options:
//           </label>
// {options.map((option, index) => (
//   <div key={option.id} style={{ marginBottom: "16px" }}>
//     <input
//       type="radio"
//       id={`option-${index}`}
//       name="selectedOption"
//       value={index}
//       checked={selectedOption === index}
//       onChange={() => setSelectedOption(index)}
//       style={{
//         marginRight: "8px",
//       }}
//     />
//     <label htmlFor={`option-${index}`}>
//       {option.options}
//       {/* Adjust this line to display the option value */}
//     </label>
//   </div>
// ))}

//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#4caf50",
//               color: "#fff",
//               padding: "10px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//         </form>
//       ) : validuser === 1 ? (
//         <p>You have done polling</p>
//       ) : (
//         <p>No poll available</p>
//       )}
//     </div>
//   );
// };

// export default Viewpoll;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { Radio } from "@mui/material";
import "./Viewpoll.css";
import Button from "@mui/material/Button";

import PollIcon from "@mui/icons-material/Poll";

import { RadioGroup, FormControlLabel } from "@mui/material";

const Viewpoll = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([{ id: "", options: "", count: "" }]);
  const [selectedOption, setSelectedOption] = useState({});
  const [pollId, setPollId] = useState("");
  const [validuser, setValidUser] = useState(0);
  const username = auth?.user?.name;

  useEffect(() => {
    // Fetch existing poll data if pollId is provided

    const fetchPollData = async () => {
      try {
        const response = await axios.get("/api/v1/general/getPoll");
        const pollData = response.data; // Assuming your backend provides poll data
        setQuestion(pollData.question);
        setOptions(pollData.options);
        setPollId(pollData._id);
        const userExists = pollData.votedUsers.includes(username);
        if (userExists) {
          setValidUser(1);
        }
      } catch (error) {
        console.error("Error fetching poll data:", error);
        // Handle errors here
      }
    };
    fetchPollData();
  }, []);

  // when submit button is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(options[selectedOption]);
    try {
      const response = await axios.post("/api/v1/general/submitPoll", {
        selectedOption: options[selectedOption],
        username,
      });
      toast.success("Poll submitted successfully");
      console.log("Poll updated successfully:", response.data);

      navigate("/dashboard/student");
    } catch (error) {
      toast.error("Error submitting poll");
      console.error("Error submitting poll:", error);
    }
  };
  console.log(`your id is${validuser}`);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "50px",
      }}
    >
      <div className="wrappers">
        {validuser === 0 && pollId ? (
          <form onSubmit={handleSubmit} className="poll-area">
            <p style={{ fontWeight: "bold", marginTop: 100, fontSize: 30 }}>
              {question} ?{" "}
            </p>
            <hr />

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={
                    <>
                      {`${option.options} `}
                      <PollIcon style={{ marginLeft: "160px" }} />
                      {` (${option.count})`}
                    </>
                  }
                />
              ))}
            </RadioGroup>

            <hr />
            {/* <button
             
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "200px",
                margin: "0 auto",
              }}
            >
              Vote
            </button> */}

            <Button type="submit" variant="contained">
              Vote
            </Button>
          </form>
        ) : validuser === 1 ? (
          <p>You have done polling</p>
        ) : (
          <p>No poll available</p>
        )}
      </div>
    </div>
  );
};

export default Viewpoll;
