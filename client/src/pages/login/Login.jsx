import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';

const roleDetails = {
  student: {
    label: 'Student',
    icon: 'fa-user-graduate',
    description: 'Access your schedule, materials, and interact with professors.',
  },
  professor: {
    label: 'Professor',
    icon: 'fa-chalkboard-teacher',
    description: 'Manage lectures, assignments, and student performance.',
  },
  admin: {
    label: 'Admin',
    icon: 'fa-user-shield',
    description: 'Control platform access, manage users, and monitor activity.',
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCardClick = (role) => {
    setSelectedRole(role);
    setShowModal(true);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', {
        email,
        password,
        role: selectedRole,
      });
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate(`/${selectedRole}/dashboard`);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f5f2fc', width: '100vw', maxHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-light border-bottom" style={{ backgroundColor: '#f5f2fc' }}>
        <div className="container">
          <span className="navbar-brand mb-0 h1" style={{ color: '#4B3869', fontWeight: 'bold' }}>
            ProfAid
          </span>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center px-3">
        <h2 className="my-4 text-center" style={{ color: '#4B3869' }}>
          Login to ProfAid
        </h2>

        <div className="container">
          <div className="row justify-content-center">
            {Object.entries(roleDetails).map(([role, { label, icon, description }]) => (
              <div key={role} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
                <div
                  className="card text-white"
                  onClick={() => handleCardClick(role)}
                  style={{
                    width: '100%',
                    maxWidth: '250px',
                    aspectRatio: '3 / 4',
                    backgroundColor: selectedRole === role ? '#5C4380' : '#4B3869',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease-in-out',
                    border: selectedRole === role ? '2px solid #9F7AEA' : 'none',
                  }}
                >
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                    <i className={`fas ${icon} mb-3`} style={{ fontSize: '2.5rem' }}></i>
                    <h5 className="card-title mb-2">Login as {label}</h5>
                    <p className="card-text" style={{ fontSize: '0.9rem' }}>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1050 }}
        >
          <div
            className="bg-white p-4 rounded"
            style={{ width: '90%', maxWidth: '400px', position: 'relative' }}
          >
            <h4 className="mb-3 text-center">{roleDetails[selectedRole].label} Login</h4>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: '#4B3869', fontWeight: '500' }}>
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="you@rgukt.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: '#4B3869', fontWeight: '500' }}>
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-danger text-center">{error}</p>}

              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: '#6B4EA0', border: 'none' }}
              >
                Login
              </button>
            </form>


            <button
              className="position-absolute top-0 end-0 btn btn-sm"
              onClick={() => setShowModal(false)}
              style={{ color: '#999', fontSize: '1.2rem' }}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-3 border-top" style={{ backgroundColor: '#f5f2fc' }}>
        <div style={{ color: '#4B3869', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} ProfAid. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Login;
