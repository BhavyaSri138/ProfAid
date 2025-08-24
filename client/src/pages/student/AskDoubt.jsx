import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AskDoubt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const studentEmail = location.state?.email || "";

  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        studentEmail,
        title,
        description,
        status: "pending",
      };

      const res = await axios.post("http://localhost:5000/api/doubts", payload);

      navigate("/student/dashboard", { state: { newDoubt: res.data } });
    } catch (error) {
      console.error("Error posting doubt:", error);

      // fallback navigation
      navigate("/student/dashboard", {
        state: {
          newDoubt: {
            title,
            description,
            studentEmail,
            status: "pending",
            response: "",
          },
        },
      });
    }
  };

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
      <header
        style={{
          backgroundColor: "white",
          padding: "1rem 2rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2 style={{ color: "#4B3869", margin: 0 }}>ProfAid</h2>
      </header>

      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card shadow-lg p-4" style={{ width: "450px" }}>
          <h4 className="text-center mb-4" style={{ color: "#4B3869" }}>
            Ask a Doubt
          </h4>
          <form onSubmit={handleSubmit}>

            {/* Short Title */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Doubt Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="E.g. Difference between let and var"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Detailed Description */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Detailed Description</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Type your detailed doubt or explanation..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: "#6B4EA0" }}
            >
              Post Doubt
            </button>
          </form>
        </div>
      </main>

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

export default AskDoubt;
