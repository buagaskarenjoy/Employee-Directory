import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeList.css";

const EmployeeList = ({ employees }) => {
    const navigate = useNavigate();
  
    return (
        <div className="employee-container">
            <button className="back-button" onClick={() => navigate("/home")}>⬅ Back to Home</button>
            <h3 className="page-title">📋 Employee List</h3>
            <div className="table-container">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.position}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
