import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing students
    const stored = JSON.parse(localStorage.getItem("students")) || [];

    // Add new one
    const updated = [...stored, formData];

    // Save back
    localStorage.setItem("students", JSON.stringify(updated));

    // Redirect
    navigate("/admin/dashboard");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow p-4">
        <h3 style={{ color: "#4B3869" }}>Add Student</h3>
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
            <label className="form-label">Branch</label>
            <input
              type="text"
              name="branch"
              className="form-control"
              value={formData.branch}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn" style={{ backgroundColor: "#4B3869", color: "white" }}>
            Save Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
