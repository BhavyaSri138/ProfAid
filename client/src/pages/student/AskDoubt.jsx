import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AskDoubt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const studentEmail = location.state?.email || "";

  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDoubt = {
      title: subject,
      description,
      status: "pending",
      reply: "",
    };

    try {
      const formData = new FormData();
      formData.append("email", studentEmail);
      formData.append("title", subject);
      formData.append("description", description);
      if (file) formData.append("file", file);

      // Send to backend
      const res = await axios.post("http://localhost:5000/api/doubts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Navigate back with new doubt
      navigate("/student/dashboard", { state: { newDoubt: res.data } });

    } catch (error) {
      console.error("Error posting doubt:", error);

      // Even if backend fails, navigate with local data for demo
      navigate("/student/dashboard", { state: { newDoubt } });
    }
  };

  return (
    <div style={{ backgroundColor: "#f7f4fc", minHeight: "100vh", display: "flex", flexDirection: "column", width: "100vw" }}>
      <header style={{ backgroundColor: "white", padding: "1rem 2rem", borderBottom: "1px solid #ddd" }}>
        <h2 style={{ color: "#4B3869", margin: 0 }}>ProfAid</h2>
      </header>

      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="card shadow-lg p-4" style={{ width: "400px" }}>
          <h4 className="text-center mb-4" style={{ color: "#4B3869" }}>Ask a Doubt</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Select Subject</label>
              <select
                className="form-select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">Choose a subject...</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Programming">Programming</option>
                <option value="English">English</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Your Question</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Type your doubt here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Attach File (optional)</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#6B4EA0" }}>
              Post Doubt
            </button>
          </form>
        </div>
      </main>

      <footer style={{ backgroundColor: "white", padding: "0.5rem", textAlign: "center", borderTop: "1px solid #ddd", fontSize: "0.9rem", color: "#666" }}>
        © 2025 ProfAid. All rights reserved.
      </footer>
    </div>
  );
};

export default AskDoubt;
