import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GuestForm = () => {
  const navigate = useNavigate();
  const [guestData, setGuestData] = useState({
    name: "",
    contactNumber: "",
    email: "", // Add email field
    startDate: "",
    numberOfDays: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/general/guests", guestData);
      if (res.data) {
        window.alert("Make Payment Now!!! ");
        navigate(`/guest/payment?email=${guestData.email}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setGuestData({ ...guestData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail">Email</label> {/* Add email label */}
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputContactNo">Contact Number</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputContactNo"
          name="contactNumber"
          placeholder="Enter your contact number"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputStartDate">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="exampleInputStartDate"
          name="startDate"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputNumberOfDays">Number of Days</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputNumberOfDays"
          name="numberOfDays"
          placeholder="Enter number of days"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputTotalPayment">Total Payment</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputTotalPayment"
          name="totalPayment"
          value={120 * guestData.numberOfDays} // Display total payment
          readOnly
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default GuestForm;
