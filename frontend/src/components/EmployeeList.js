// src/components/EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    if (employees.length === 0) {
        return (
            <div className="alert alert-info text-center">
                <i className="fas fa-info-circle me-2"></i>
                No employees found. Add your first employee to get started.
            </div>
        );
    }

    return (
        <div className="card shadow">
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                    <i className="fas fa-list me-2"></i>
                    Employee Records ({employees.length})
                </h5>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>${employee.salary.toLocaleString()}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => onEdit(employee)}
                                            title="Edit"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => onDelete(employee.id)}
                                            title="Delete"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;