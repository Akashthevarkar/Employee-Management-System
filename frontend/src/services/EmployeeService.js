// src/services/EmployeeService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/employees';

class EmployeeService {
    // Get all employees
    getAllEmployees() {
        return axios.get(API_BASE_URL);
    }

    // Get employee by ID
    getEmployeeById(id) {
        return axios.get(`${API_BASE_URL}/${id}`);
    }

    // Filter employees by name
    getEmployeesByName(name) {
        return axios.get(`${API_BASE_URL}?name=${name}`);
    }

    // Search employees by ID or name
    searchEmployees(searchTerm) {
        return axios.get(`${API_BASE_URL}?search=${searchTerm}`);
    }

    // Create new employee
    createEmployee(employee) {
        return axios.post(API_BASE_URL, employee);
    }

    // Update employee
    updateEmployee(id, employee) {
        return axios.put(`${API_BASE_URL}/${id}`, employee);
    }

    // Delete employee
    deleteEmployee(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

export default new EmployeeService();