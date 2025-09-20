package com.hr.employee.repository;

import com.hr.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // Find employees by name (case-insensitive partial match)
    @Query("SELECT e FROM Employee e WHERE LOWER(e.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Employee> findByNameContainingIgnoreCase(@Param("name") String name);
    
    // Find employee by exact ID or name containing search term
    @Query("SELECT e FROM Employee e WHERE e.id = :searchTerm OR LOWER(e.name) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Employee> searchByIdOrName(@Param("searchTerm") String searchTerm);
}