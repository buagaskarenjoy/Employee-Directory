import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EmployeeList from "./components/EmployeeList";
import EmployeeManagement from "./components/EmployeeManagement";
import HRReports from "./components/HRReports";

function App() {

  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/employees" 
          element={<EmployeeList employees={employees} />} 
        />
        <Route 
          path="/employee-management" 
          element={<EmployeeManagement 
            employees={employees} 
            addEmployee={addEmployee} 
            editEmployee={editEmployee} 
            deleteEmployee={deleteEmployee} 
          />} 
        />
        <Route path="/reports" element={<HRReports employees={employees} />} />
      </Routes>
    </Router>
  );
}

export default App;
