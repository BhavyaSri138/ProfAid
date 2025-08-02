// src/pages/Home.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <svg
              className="me-2"
              width="30"
              height="30"
              fill="blue"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            </svg>
            <strong>ProfAid</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">
                  How it Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#subjects">
                  Subjects
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-primary btn-sm me-2">Student</button>
              <button className="btn btn-light btn-sm">Professor</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container-fluid">
          <h1 className="display-4 fw-bold mb-3">
            Get Your Doubts Solved by Expert Professors
          </h1>
          <p className="lead mb-4">
            Connect with qualified professors instantly. Upload your questions,
            get detailed explanations, and excel in your studies.
          </p>
          <div>
            <button className="btn btn-light btn-lg me-2">
              Ask a Question
            </button>
            <button className="btn btn-outline-light btn-lg">
              Join as Professor
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">How ProfAid Works</h2>
          <p className="text-muted mb-5">
            Simple steps to get your academic doubts resolved by expert professors
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded h-100">
                <h4>1. Ask Your Question</h4>
                <p className="text-muted">
                  Upload your question with images, select subject, and provide details for better understanding.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded h-100">
                <h4>2. Get Connected</h4>
                <p className="text-muted">
                  Available professors in your subject area can view and accept your question.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded h-100">
                <h4>3. Learn & Grow</h4>
                <p className="text-muted">
                  Receive detailed explanations, chat with professors, and rate your experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Subjects We Cover</h2>
          <p className="text-muted mb-5">
            Expert professors available across all major academic subjects
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded bg-white">Mathematics</div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-white">Physics</div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-white">Chemistry</div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-white">Biology</div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-white">Computer Science</div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded bg-white">Economics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} ProfAid. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
