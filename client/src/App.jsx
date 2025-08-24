import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ProfessorDashboard from './pages/professor/ProfessorDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import AskDoubt from './pages/student/AskDoubt'; // Import AskDoubt component
import AddProfessor from './pages/admin/AddProfessor';
import AddStudent from './pages/admin/AddStudent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/professor" element={<ProfessorDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/ask" element={<AskDoubt />} /> 
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-professor" element={<AddProfessor />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
