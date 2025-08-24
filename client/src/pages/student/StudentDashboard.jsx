import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // ✅ React icon for profile
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const StudentDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Dummy logged-in student details (replace with localStorage or API later)
  const [student, setStudent] = useState({
    name: "John Doe",
    email: "student@example.com",
    rollNo: "CS101",
    course: "B.Tech CSE",
  });

  // Dummy doubts for now
  const [doubts, setDoubts] = useState([
    {
      title: "What is React?",
      description: "I want to understand the basic concepts of React.js.",
      status: "pending",
      reply: "Awaiting reply",
    },
    {
      title: "Difference between var, let, const",
      description: "In JavaScript, when should we use each?",
      status: "answered",
      reply: "Use let/const in modern code; var is function-scoped.",
    },
  ]);

  // Add new doubt if redirected back from AskDoubt
  useEffect(() => {
    if (location.state?.newDoubt) {
      setDoubts((prev) => [...prev, location.state.newDoubt]);
    }

    // ✅ Example: Load student details from localStorage if available
    const savedStudent = localStorage.getItem("student");
    if (savedStudent) {
      setStudent(JSON.parse(savedStudent));
    }
  }, [location.state]);

  const pendingCount = doubts.filter((d) => d.status === "pending").length;
  const answeredCount = doubts.filter((d) => d.status === "answered").length;

  return (
    <div
      style={{
        backgroundColor: "#f7f4fc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#4B3869", margin: 0 }}>ProfAid</h2>

        {/* ✅ Profile Icon triggers Sidebar */}
        <FaUserCircle
          size={50}
          color="#6B4EA0"
          data-bs-toggle="offcanvas"
          data-bs-target="#profileSidebar"
          aria-controls="profileSidebar"
          style={{ cursor: "pointer" }}
        />
      </header>

      {/* ✅ Bootstrap Sidebar (Offcanvas) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="profileSidebar"
        aria-labelledby="profileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 id="profileSidebarLabel">Student Profile</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Roll No:</strong> {student.rollNo}
          </p>
          <p>
            <strong>Course:</strong> {student.course}
          </p>
          <button onClick={() => navigate("/login")} className="btn btn-danger w-100">
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Stats */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <div
            className="card shadow"
            style={{
              backgroundColor: "#6B4EA0",
              color: "white",
              padding: "1rem",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h5>Pending Doubts</h5>
            <h3>{pendingCount}</h3>
          </div>

          <div
            className="card shadow"
            style={{
              backgroundColor: "#6B4EA0",
              color: "white",
              padding: "1rem",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h5>Answered Doubts</h5>
            <h3>{answeredCount}</h3>
          </div>
        </div>

        {/* Doubts Table */}
        <div className="card shadow-lg p-4" style={{ width: "90%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ color: "#4B3869" }}>Your Doubts</h4>
            <button
              onClick={() =>
                navigate("/student/ask", { state: { email: student.email } })
              }
              className="btn text-white"
              style={{ backgroundColor: "#6B4EA0" }}
            >
              Ask New Doubt
            </button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Professor Reply</th>
              </tr>
            </thead>
            <tbody>
              {doubts.map((doubt, index) => (
                <tr key={index}>
                  <td>{doubt.title}</td>
                  <td>
                    <span
                      className={`badge ${
                        doubt.status === "answered"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {doubt.status}
                    </span>
                  </td>
                  <td>{doubt.reply || "Awaiting reply"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "white",
          padding: "0.5rem",
          textAlign: "center",
          borderTop: "1px solid #ddd",
          fontSize: "0.9rem",
          color: "#666",
        }}
      >
        © 2025 ProfAid. All rights reserved.
      </footer>
    </div>
  );
};

export default StudentDashboard;
