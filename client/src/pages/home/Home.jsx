import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FaBell, FaLock, FaBook, FaMobileAlt, FaUserAlt, FaPenFancy, FaComments } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4B3869' }}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center text-white fw-bold fs-4" href="#home">
            <h4 style={{ marginTop:'9px', color: 'white' , fontWeight:'bolder' }}>
              <i className="fas fa-graduation-cap"></i> ProfAid
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#how">How It Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="btn ms-3" href="/login" style={{ backgroundColor: '#D4C1EC', color: '#2E2E2E' }}>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section id="home" className="text-center py-5" style={{ background: 'linear-gradient(135deg, #F3EFFA, #D4C1EC)', marginTop: "70px" }}>
        <div className="container-fluid">
          <h1 className="display-4 fw-bold" style={{ color: '#4B3869' }}>Welcome to ProfAid</h1>
          <p className="lead">Ask doubts anytime. Get expert help from your faculty.</p>
          <div className="mt-4">
            <button className="btn me-3" style={{ backgroundColor: '#4B3869', color: '#fff' }}>Get Started</button>
            <button className="btn btn-outline-dark">Learn More</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5" style={{ backgroundColor: '#F3EFFA' }}>
        <div className="container text-center">
          <h2 className="mb-3" style={{ color: '#4B3869' }}>About ProfAid</h2>
          <p className="mx-auto w-75 text-muted">
            ProfAid bridges the gap between students and professors, creating a seamless platform
            for academic support and doubt resolution. Our mission is to make quality education
            accessible and interactive for every student.
          </p>
          <blockquote className="fst-italic mt-4 text-dark">
            “Education is the most powerful weapon which you can use to change the world.” <br />
            <span className="fw-bold">&mdash; Nelson Mandela</span>
          </blockquote>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-5" style={{ backgroundColor: '#D4C1EC' }}>
        <div className="container-fluid">
          <h2 className="text-center mb-4" style={{ color: '#4B3869' }}>How It Works</h2>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow p-3 rounded-4" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaUserAlt /></div>
                <h5 className="card-title mt-2">Post a Doubt</h5>
                <p className="card-text">
                  Students can easily post their academic doubts with detailed descriptions and relevant subject tags.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow p-3 rounded-4" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaPenFancy /></div>
                <h5 className="card-title mt-2">Faculty Responds</h5>
                <p className="card-text">
                  Qualified faculty members review and provide comprehensive answers to student queries promptly.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow p-3 rounded-4" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaComments /></div>
                <h5 className="card-title mt-2">Chat Follow-up</h5>
                <p className="card-text">
                  Continue the conversation with follow-up questions and real-time chat for better understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5" style={{ backgroundColor: '#F3EFFA' }}>
        <div className="container-fluid">
          <h2 className="text-center mb-4" style={{ color: '#4B3869' }}>Features</h2>
          <p className="text-center text-muted mb-5">Everything you need for seamless academic support</p>
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="card h-100 p-3 rounded-4 shadow" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaBell /></div>
                <h5 className="mt-2">Real-time Notifications</h5>
                <p>Get instant alerts when your doubts are answered or when new discussions start.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-3 rounded-4 shadow" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaLock /></div>
                <h5 className="mt-2">Secure Login</h5>
                <p>Firebase-powered authentication ensures your data is safe and secure at all times.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-3 rounded-4 shadow" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaBook /></div>
                <h5 className="mt-2">Doubt History</h5>
                <p>Access your complete doubt history and track your learning progress over time.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 p-3 rounded-4 shadow" style={{ backgroundColor: '#4B3869', color: '#fff' }}>
                <div className="fs-1"><FaMobileAlt /></div>
                <h5 className="mt-2">Mobile Responsive</h5>
                <p>Access ProfAid seamlessly across all devices - desktop, tablet, and mobile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="footer-container"
        style={{ backgroundColor: '#D4C1EC', padding: '2rem 4rem' }}
      >
        <div
          className="footer-content"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            fontFamily: 'sans-serif',
            fontSize: '1rem',
            color: '#2c2c2c',
          }}
        >
          {/* Brand Info */}
          <div className="footer-brand" style={{ flex: 1, minWidth: '200px' }}>
            <h4 style={{ marginBottom: '0.75rem', color: '#4B3869' , fontWeight:'bolder' }}>
              <i className="fas fa-graduation-cap"></i> ProfAid
            </h4>
            <p style={{ margin: 0 }}>© 2025 ProfAid. All rights reserved.</p>
            <p style={{ margin: '0.5rem 0' }}>
              Contact: <a href="mailto:support@profAid.com">support@profAid.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links" style={{ flex: 1, minWidth: '200px' }}>
            <h5 style={{ marginBottom: '0.75rem', color: '#4B3869' }}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#about">About</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-social" style={{ flex: 1, minWidth: '200px' }}>
            <h5 style={{ marginBottom: '0.75rem', color: '#4B3869', textAlign: 'right' }}>Follow Us</h5>
            <div className="social-icons" style={{ textAlign: 'right' }}>
              <a href="#" style={{ marginLeft: '0.5rem', fontSize: '1.2rem' }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" style={{ marginLeft: '0.5rem', fontSize: '1.2rem' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ marginLeft: '0.5rem', fontSize: '1.2rem' }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" style={{ marginLeft: '0.5rem', fontSize: '1.2rem' }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>



    </>
  );
}
