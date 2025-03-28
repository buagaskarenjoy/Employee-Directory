import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeManagement.css";

const EmployeeManagement = ({ employees, addEmployee, editEmployee, deleteEmployee }) => {
  const navigate = useNavigate();
  const [newEmployee, setNewEmployee] = useState({ name: "", gender: "", position: "", salary: "", contact: "" });
  const [editEmployeeData, setEditEmployeeData] = useState(null);

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.gender && newEmployee.position && newEmployee.salary && newEmployee.contact) {
      addEmployee(newEmployee);
      setNewEmployee({ name: "", gender: "", position: "", salary: "", contact: "" });
    }
  };

  const handleEditChange = (e) => {
    setEditEmployeeData({ ...editEmployeeData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editEmployeeData.name && editEmployeeData.gender && editEmployeeData.position && editEmployeeData.salary && editEmployeeData.contact) {
      editEmployee(editEmployeeData);
      setEditEmployeeData(null);
    }
  };

  return (
    <div className="employee-management-container">
      <button className="back-button" onClick={() => navigate("/home")}>⬅ Back to Home</button>
      <h3>🛠️ Employee Management</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newEmployee.name} onChange={handleChange} required />
        <select name="gender" value={newEmployee.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" name="position" placeholder="Position" value={newEmployee.position} onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" value={newEmployee.salary} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact" value={newEmployee.contact} onChange={handleChange} required />
        <button type="submit">➕ Add Employee</button>
      </form>

      {editEmployeeData && (
        <div className="edit-modal">
          <h3>Edit Employee</h3>
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              name="name"
              value={editEmployeeData.name}
              onChange={handleEditChange}
            />
            <select
              name="gender"
              value={editEmployeeData.gender}
              onChange={handleEditChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              name="position"
              value={editEmployeeData.position}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="salary"
              value={editEmployeeData.salary}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="contact"
              value={editEmployeeData.contact}
              onChange={handleEditChange}
            />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}

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
              <th>Actions</th>
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
                <td>
                  <button onClick={() => setEditEmployeeData(emp)}>✏️ Edit</button>
                  <button onClick={() => deleteEmployee(emp.id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;
