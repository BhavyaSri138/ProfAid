import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfessorDashboard = () => {
    const [doubts, setDoubts] = useState([]);
    const navigate = useNavigate();
    const professorEmail = localStorage.getItem("email");

    const logoutHandler = () => {
        localStorage.clear();
        navigate("/login");
    };

    useEffect(() => {
        const fetchDoubts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/doubts/professor/${professorEmail}`);
                const fetchedDoubts = res.data;

                if (fetchedDoubts.length === 0) {
                    // Show a sample doubt for UI preview
                    setDoubts([
                        {
                            _id: "sample123",
                            title: "What is a closure in JavaScript?",
                            description: "I don't understand how closures work in nested functions.",
                            studentEmail: "student1@rgukt.ac.in",
                            status: "pending",
                        },
                    ]);
                } else {
                    setDoubts(fetchedDoubts);
                }
            } catch (error) {
                console.error("Error fetching doubts:", error);
                // Optional: Show dummy on error too
                setDoubts([
                    {
                        _id: "sampleError",
                        title: "Sample doubt due to fetch error",
                        description: "Unable to fetch real doubts from server.",
                        studentEmail: "demo@rgukt.ac.in",
                        status: "pending",
                    },
                ]);
            }
        };

        fetchDoubts();
    }, [professorEmail]);


    const total = doubts.length;
    const pending = doubts.filter((d) => d.status === "pending").length;
    const answered = doubts.filter((d) => d.status === "answered").length;

    const replyHandler = (doubtId) => {
        navigate(`/professor/reply/${doubtId}`);
    };

    return (
        <div style={{ backgroundColor: "#f5f2fc", minHeight: "100vh", width: '100vw', padding: "20px" }}>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded shadow-sm bg-white">
                <h3 style={{ color: "#4B3869", fontWeight: "600", margin: 0 }}>ProfAid – Professor Dashboard</h3>
                <div>
                    <span style={{ color: "#4B3869", marginRight: "15px", fontWeight: "500" }}>{professorEmail}</span>
                    <button onClick={logoutHandler} className="btn btn-outline-secondary btn-sm">Logout</button>
                </div>
            </div>

            {/* Overview Stats */}
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

            {/* Doubts List */}
            <div className="bg-white rounded shadow-sm p-4">
                <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Assigned Doubts</h5>
                {doubts.length === 0 ? (
                    <p className="text-muted mt-3">No doubts assigned yet.</p>
                ) : (
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Student</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doubts.map((doubt) => (
                                    <tr key={doubt._id}>
                                        <td>{doubt.title}</td>
                                        <td>{doubt.description}</td>
                                        <td>{doubt.studentEmail}</td>
                                        <td>
                                            <span
                                                className={`badge ${doubt.status === "answered" ? "bg-success" : "bg-warning text-dark"
                                                    }`}
                                            >
                                                {doubt.status}
                                            </span>
                                        </td>
                                        <td>
                                            {doubt.status === "pending" ? (
                                                <button
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => replyHandler(doubt._id)}
                                                >
                                                    Reply
                                                </button>
                                            ) : (
                                                <span className="text-muted">Replied</span>
                                            )}
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

export default ProfessorDashboard;
