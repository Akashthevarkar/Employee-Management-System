// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        salary: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name,
                email: employee.email,
                salary: employee.salary
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.salary) {
            newErrors.salary = 'Salary is required';
        } else if (isNaN(formData.salary) || parseFloat(formData.salary) <= 0) {
            newErrors.salary = 'Salary must be a positive number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSave({
                ...formData,
                salary: parseFloat(formData.salary)
            });
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">
                            <i className={`fas fa-${employee ? 'edit' : 'user-plus'} me-2`}></i>
                            {employee ? 'Edit Employee' : 'Add New Employee'}
                        </h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter employee name"
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">{errors.name}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter employee email"
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">
                                    Salary <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input
                                        type="number"
                                        className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                                        id="salary"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleChange}
                                        placeholder="Enter salary amount"
                                        step="0.01"
                                    />
                                    {errors.salary && (
                                        <div className="invalid-feedback">{errors.salary}</div>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onCancel}
                                >
                                    <i className="fas fa-times me-2"></i>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-save me-2"></i>
                                    {employee ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;