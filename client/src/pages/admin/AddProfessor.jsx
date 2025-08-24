import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProfessor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing professors
    const stored = JSON.parse(localStorage.getItem("professors")) || [];

    // Add new one
    const updated = [...stored, formData];

    // Save back
    localStorage.setItem("professors", JSON.stringify(updated));

    // Redirect
    navigate("/admin/dashboard");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow p-4">
        <h3 style={{ color: "#4B3869" }}>Add Professor</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              className="form-control"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn" style={{ backgroundColor: "#6B4EA0", color: "white" }}>
            Save Professor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProfessor;
