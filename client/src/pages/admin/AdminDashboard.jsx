import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const adminEmail = localStorage.getItem("email");
  const navigate = useNavigate();

  const [professors, setProfessors] = useState([]);
  const [students, setStudents] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const profs = JSON.parse(localStorage.getItem("professors")) || [];
    const studs = JSON.parse(localStorage.getItem("students")) || [];
    setProfessors(profs);
    setStudents(studs);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "#f5f2fc", minHeight: "100vh", padding: "20px", width: "100vw" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded shadow-sm bg-white">
        <h3 style={{ color: "#4B3869", fontWeight: "600", margin: 0 }}>ProfAid – Admin Dashboard</h3>
        <div>
          <span style={{ color: "#4B3869", marginRight: "15px", fontWeight: "500" }}>{adminEmail}</span>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Add Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div
            className="card text-center p-4 shadow-sm"
            style={{ cursor: "pointer", backgroundColor: "#6B4EA0", color: "white" }}
            onClick={() => navigate("/add-professor")}
          >
            <h5>Add Professor</h5>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card text-center p-4 shadow-sm"
            style={{ cursor: "pointer", backgroundColor: "#4B3869", color: "white" }}
            onClick={() => navigate("/add-student")}
          >
            <h5>Add Student</h5>
          </div>
        </div>
      </div>

      {/* Professors Table */}
      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Professors List</h5>
        {professors.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Department</th></tr>
            </thead>
            <tbody>
              {professors.map((prof, i) => (
                <tr key={i}>
                  <td>{prof.name}</td>
                  <td>{prof.email}</td>
                  <td>{prof.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-muted">No professors added yet.</p>
        )}
      </div>

      {/* Students Table */}
      <div className="bg-white rounded shadow-sm p-4">
        <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Students List</h5>
        {students.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Branch</th></tr>
            </thead>
            <tbody>
              {students.map((stu, i) => (
                <tr key={i}>
                  <td>{stu.name}</td>
                  <td>{stu.email}</td>
                  <td>{stu.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-muted">No students added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
