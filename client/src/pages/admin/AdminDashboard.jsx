import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [professors, setProfessors] = useState([]);
  const [students, setStudents] = useState([]);
  const [newProf, setNewProf] = useState({ name: "", email: "", dept: "" });
  const [newStudent, setNewStudent] = useState({ name: "", email: "", branch: "" });
  const adminEmail = localStorage.getItem("email");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const profRes = await axios.get("http://localhost:5000/api/users/professors");
        const studRes = await axios.get("http://localhost:5000/api/users/students");
        setProfessors(profRes.data);
        setStudents(studRes.data);
      } catch (error) {
        console.error("Error fetching users:", error);

        // Dummy data fallback
        setProfessors([
          { id: "p1", name: "Dr. Srinivas", email: "srinivas@rgukt.ac.in", dept: "CSE" },
          { id: "p2", name: "Ms. Kavitha", email: "kavitha@rgukt.ac.in", dept: "ECE" },
        ]);

        setStudents([
          { id: "s1", name: "Ravi Teja", email: "ravi2022@rgukt.ac.in", branch: "CSE" },
          { id: "s2", name: "Sneha", email: "sneha2022@rgukt.ac.in", branch: "ME" },
        ]);
      }
    };

    fetchUsers();
  }, []);

  // Add professor handler
  const handleAddProfessor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/professors", newProf);
      setProfessors([...professors, { id: Date.now(), ...newProf }]);
      setNewProf({ name: "", email: "", dept: "" });
    } catch (error) {
      console.error("Error adding professor:", error);
      setProfessors([...professors, { id: Date.now(), ...newProf }]); // Fallback local add
      setNewProf({ name: "", email: "", dept: "" });
    }
  };

  // Add student handler
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/students", newStudent);
      setStudents([...students, { id: Date.now(), ...newStudent }]);
      setNewStudent({ name: "", email: "", branch: "" });
    } catch (error) {
      console.error("Error adding student:", error);
      setStudents([...students, { id: Date.now(), ...newStudent }]); // Fallback local add
      setNewStudent({ name: "", email: "", branch: "" });
    }
  };

  // Logout handler using navigate
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
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="p-3 rounded shadow-sm text-white" style={{ backgroundColor: "#6B4EA0" }}>
            <h5>Total Professors</h5>
            <h3>{professors.length}</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 rounded shadow-sm text-white" style={{ backgroundColor: "#4B3869" }}>
            <h5>Total Students</h5>
            <h3>{students.length}</h3>
          </div>
        </div>
      </div>

      {/* Professors Section */}
      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Add Professor</h5>
        <form onSubmit={handleAddProfessor} className="row g-2 mb-3">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Name"
              value={newProf.name} onChange={(e) => setNewProf({ ...newProf, name: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="email" className="form-control" placeholder="Email"
              value={newProf.email} onChange={(e) => setNewProf({ ...newProf, email: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Department"
              value={newProf.dept} onChange={(e) => setNewProf({ ...newProf, dept: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <button
              className="btn w-100"
              style={{
                backgroundColor: "#6B4EA0",   // Violet shade
                borderColor: "#6B4EA0",
                color: "white",
                fontWeight: "500"
              }}
            >
              Add
            </button>
          </div>
        </form>

        {/* Professors Table */}
        <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Professors List</h5>
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {professors.map((prof) => (
                <tr key={prof.id}>
                  <td>{prof.name}</td>
                  <td>{prof.email}</td>
                  <td>{prof.dept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Students Section */}
      <div className="bg-white rounded shadow-sm p-4">
        <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Add Student</h5>
        <form onSubmit={handleAddStudent} className="row g-2 mb-3">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Name"
              value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="email" className="form-control" placeholder="Email"
              value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Branch"
              value={newStudent.branch} onChange={(e) => setNewStudent({ ...newStudent, branch: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <button
              className="btn w-100"
              style={{
                backgroundColor: "#4B3869",   // Violet shade
                borderColor: "#6B4EA0",
                color: "white",
                fontWeight: "500"
              }}
            >
              Add
            </button>
          </div>
        </form>

        {/* Students Table */}
        <h5 style={{ color: "#4B3869", fontWeight: "600" }}>Students List</h5>
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => (
                <tr key={stu.id}>
                  <td>{stu.name}</td>
                  <td>{stu.email}</td>
                  <td>{stu.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
