import React from "react";
import { useNavigate } from "react-router-dom";
import "./HRReports.css";

const HRReports = ({ employees }) => {
  const navigate = useNavigate();
  
  const totalEmployees = employees.length;
  const maleEmployees = employees.filter(emp => emp.gender === "Male").length;
  const femaleEmployees = employees.filter(emp => emp.gender === "Female").length;

  return (
    <div className="hr-reports-container">
      <header className="hr-reports-header">
        <h1>📊 HR Reports</h1>
        <p>Analyze employee data and performance metrics.</p>
      </header>

      <section className="hr-reports-grid">
        <div className="hr-report-card">
          <h3>📈 Employee Statistics</h3>
          <p>View the total number of employees, gender ratio, and more.</p>
          <table className="hr-reports-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Employees</td>
                <td>{totalEmployees}</td>
              </tr>
              <tr>
                <td>Male</td>
                <td>{maleEmployees}</td>
              </tr>
              <tr>
                <td>Female</td>
                <td>{femaleEmployees}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="hr-reports-back">
        <button onClick={() => navigate("/home")}>
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
};

export default HRReports;
