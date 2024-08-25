import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAadhar } from "../Server"; // Assuming you have this function
import "./AddAadhar.css";

const AddAadhar = () => {
  const [personName, setPersonName] = useState("");
  const [aadharId, setAadharId] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const newAadhar = [{ personName, aadharId, gender }];
      await createAadhar(newAadhar);

      setPersonName("");
      setAadharId("");
      setGender("");

      alert("Aadhar details added successfully!");
    } catch (error) {
      setError("Failed to add Aadhar details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-aadhar-container">
      <h2>Add Aadhar Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="personName">Name:</label>
          <input
            type="text"
            id="personName"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharId">Aadhar Number:</label>
          <input
            type="number"
            id="aadharId"
            value={aadharId}
            onChange={(e) => setAadharId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Aadhar"}
        </button>
      </form>
    </div>
  );
};

export default AddAadhar;
