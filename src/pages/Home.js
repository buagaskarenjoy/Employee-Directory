import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import companyLogo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <img src={companyLogo} alt="Company Logo" className="logo" />
        <h3>HR Dashboard</h3>
        <ul>
          <li onClick={() => navigate("/employees")}>📋 Employee List</li>
          <li onClick={() => navigate("/employee-management")}>🛠️ Employee Management</li>
          <li onClick={() => navigate("/reports")}>📊 HR Reports</li>
          <li className="logout" onClick={handleLogout}>🚪 Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <header>
          <h1>Welcome, HR Admin</h1>
          <p>Manage employees and HR tasks efficiently.</p>
        </header>

        <section className="dashboard">
          <div className="card">
            <h3>📋 Employees</h3>
            <p>View all employee records.</p>
            <button onClick={() => navigate("/employees")}>View Employees</button>
          </div>

          <div className="card">
            <h3>🛠️ Employee Management</h3>
            <p>Add, edit, or remove employees.</p>
            <button onClick={() => navigate("/employee-management")}>Manage Employees</button>
          </div>

          <div className="card">
            <h3>📊 Reports</h3>
            <p>Generate HR reports and analytics.</p>
            <button onClick={() => navigate("/reports")}>View Reports</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
