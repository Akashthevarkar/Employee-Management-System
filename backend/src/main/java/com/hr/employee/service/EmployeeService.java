package com.hr.employee.service;

import com.hr.employee.exception.ResourceNotFoundException;
import com.hr.employee.model.Employee;
import com.hr.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository employeeRepository;
    
    // Get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    // Get employee by ID
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee", "id", id));
    }
    
    // Filter employees by name
    public List<Employee> getEmployeesByName(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }
    
    // Search employees by ID or name
    public List<Employee> searchEmployees(String searchTerm) {
        // Try to parse as Long for ID search
        try {
            Long id = Long.parseLong(searchTerm);
            Employee employee = employeeRepository.findById(id).orElse(null);
            if (employee != null) {
                return List.of(employee);
            }
        } catch (NumberFormatException e) {
            // Not a number, search by name
        }
        return employeeRepository.findByNameContainingIgnoreCase(searchTerm);
    }
    
    // Create new employee
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    
    // Update employee
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = getEmployeeById(id);
        employee.setName(employeeDetails.getName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setSalary(employeeDetails.getSalary());
        return employeeRepository.save(employee);
    }
    
    // Delete employee
    public void deleteEmployee(Long id) {
        Employee employee = getEmployeeById(id);
        employeeRepository.delete(employee);
    }
}