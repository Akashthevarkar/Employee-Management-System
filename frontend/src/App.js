// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBox from './components/SearchBox';
import EmployeeService from './services/EmployeeService';

function App() {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        setIsLoading(true);
        try {
            const response = await EmployeeService.getAllEmployees();
            setEmployees(response.data);
            setFilteredEmployees(response.data);
            setIsLoading(false);
        } catch (error) {
            toast.error('Error loading employees');
            setIsLoading(false);
        }
    };

    const handleSearch = async (searchTerm) => {
        if (!searchTerm.trim()) {
            setFilteredEmployees(employees);
            return;
        }

        try {
            const response = await EmployeeService.searchEmployees(searchTerm);
            setFilteredEmployees(response.data);
            if (response.data.length === 0) {
                toast.info('No employees found matching your search');
            }
        } catch (error) {
            toast.error('Error searching employees');
        }
    };

    const handleAddEmployee = () => {
        setSelectedEmployee(null);
        setShowForm(true);
    };

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        setShowForm(true);
    };

    const handleDeleteEmployee = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await EmployeeService.deleteEmployee(id);
                toast.success('Employee deleted successfully');
                loadEmployees();
            } catch (error) {
                toast.error('Error deleting employee');
            }
        }
    };

    const handleSaveEmployee = async (employee) => {
        try {
            if (selectedEmployee) {
                await EmployeeService.updateEmployee(selectedEmployee.id, employee);
                toast.success('Employee updated successfully');
            } else {
                await EmployeeService.createEmployee(employee);
                toast.success('Employee created successfully');
            }
            setShowForm(false);
            loadEmployees();
        } catch (error) {
            toast.error('Error saving employee');
        }
    };

    const handleCancelForm = () => {
        setShowForm(false);
        setSelectedEmployee(null);
    };

    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-primary mb-4">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        <i className="fas fa-users me-2"></i>
                        Employee Management System
                    </span>
                </div>
            </nav>

            <div className="container">
                {!showForm ? (
                    <>
                        <div className="row mb-4">
                            <div className="col-md-8">
                                <SearchBox onSearch={handleSearch} />
                            </div>
                            <div className="col-md-4">
                                <button 
                                    className="btn btn-success w-100"
                                    onClick={handleAddEmployee}
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Add New Employee
                                </button>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <EmployeeList
                                employees={filteredEmployees}
                                onEdit={handleEditEmployee}
                                onDelete={handleDeleteEmployee}
                            />
                        )}
                    </>
                ) : (
                    <EmployeeForm
                        employee={selectedEmployee}
                        onSave={handleSaveEmployee}
                        onCancel={handleCancelForm}
                    />
                )}
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default App;