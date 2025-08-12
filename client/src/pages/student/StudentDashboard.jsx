import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const studentEmail = localStorage.getItem("email");

  const dummyDoubts = [
    {
      title: "What is React?",
      description: "I want to understand the basic concepts of React.js.",
      status: "pending",
      reply: "",
    },
    {
      title: "Difference between var, let, const",
      description: "In JavaScript, when should we use each?",
      status: "answered",
      reply: "Use let/const in modern code; var is function-scoped.",
    },
  ];

  // Start with dummy data immediately
  const [doubts, setDoubts] = useState(dummyDoubts);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  const createDoubtHandler = () => {
    navigate("/student/ask", { state: { email: studentEmail } });
  };

  useEffect(() => {
    const fetchDoubts = async () => {
      try {
        if (!studentEmail) throw new Error("No email found in localStorage");

        const res = await axios.get(
          `http://localhost:5000/api/doubts/student/${studentEmail}`
        );

        const fetched = Array.isArray(res.data) ? res.data : [];
        // Merge fetched doubts without duplicating dummy
        setDoubts([...dummyDoubts, ...fetched]);
      } catch (error) {
        console.error("Error fetching doubts:", error);
        setDoubts(dummyDoubts); // fallback
      }
    };

    fetchDoubts();
  }, [studentEmail]);

  useEffect(() => {
    if (location.state?.newDoubt) {
      setDoubts((prev) => [location.state.newDoubt, ...prev]);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  const total = doubts.length;
  const pending = doubts.filter((d) => d.status === "pending").length;
  const answered = doubts.filter((d) => d.status === "answered").length;

  return (
    <div style={{ backgroundColor: "#f5f2fc", minHeight: "100vh", padding: "20px", width: "100vw" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded shadow-sm bg-white">
        <h3 style={{ color: "#4B3869", fontWeight: "600", margin: 0 }}>ProfAid – Student Dashboard</h3>
        <div>
          <span style={{ color: "#4B3869", marginRight: "15px", fontWeight: "500" }}>{studentEmail}</span>
          <button onClick={logoutHandler} className="btn btn-outline-secondary btn-sm">Logout</button>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="p-3 rounded shadow-sm text-white" style={{ backgroundColor: "#6B4EA0" }}>
            <h5>Total Doubts</h5>
            <h3>{total}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 rounded shadow-sm text-white" style={{ backgroundColor: "#5C4380" }}>
            <h5>Pending Doubts</h5>
            <h3>{pending}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 rounded shadow-sm text-white" style={{ backgroundColor: "#4B3869" }}>
            <h5>Answered Doubts</h5>
            <h3>{answered}</h3>
          </div>
        </div>
      </div>

      {/* Doubts Table */}
      <div className="bg-white rounded shadow-sm p-4 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Your Doubts</h5>
          <button onClick={createDoubtHandler} className="btn btn-sm btn-primary" style={{ backgroundColor: "#6B4EA0", border: "none" }}>
            Ask New Doubt
          </button>
        </div>

        {doubts.length === 0 ? (
          <p className="text-muted mt-3">You haven't asked any doubts yet.</p>
        ) : (
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Professor Reply</th>
                </tr>
              </thead>
              <tbody>
                {doubts.map((doubt, index) => (
                  <tr key={doubt._id || index}>
                    <td>{doubt.title}</td>
                    <td>{doubt.description}</td>
                    <td>
                      <span className={`badge ${doubt.status === "answered" ? "bg-success" : "bg-warning text-dark"}`}>
                        {doubt.status}
                      </span>
                    </td>
                    <td>
                      {doubt.status === "answered" ? doubt.reply : <em className="text-muted">Awaiting reply</em>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
