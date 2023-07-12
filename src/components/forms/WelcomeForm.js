import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeForm = () => {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Redirect to login page
    history('/login');
  };

  return (
    <div>
      <h2>Welcome Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for Name, Date of Birth, Email ID, Mobile Number, Gender, Qualification */}
        <input type="text" placeholder="Name" />
        <br />
        <input type="date" placeholder="Date of Birth" />
        <br />
        <input type="email" placeholder="Email ID" />
        <br />
        <input type="tel" placeholder="Mobile Number" />
        <br />
        <select>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <input type="text" placeholder="Qualification" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WelcomeForm;
