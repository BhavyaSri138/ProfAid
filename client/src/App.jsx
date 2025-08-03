import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ProfessorDashboard from './pages/professor/ProfessorDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/professor/dashboard" element={<ProfessorDashboard />} />
         <Route path='/student/dashboard' element={<StudentDashboard />}></Route>
         <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
