package com.hospital.HospitalManagementApplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.HospitalManagementApplication.model.Department;
import com.hospital.HospitalManagementApplication.repository.DepartmentRepository;

@Service
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(
            DepartmentRepository departmentRepository) {

        this.departmentRepository = departmentRepository;
    }

    public Department addDepartment(Department department) {

        return departmentRepository.save(department);
    }

    public List<Department> getAllDepartments() {

        return departmentRepository.findAll();
    }

    public Department getDepartmentById(Integer id) {

        return departmentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Department not found"));
    }

    public void deleteDepartment(Integer id) {

        Department department =
                getDepartmentById(id);

        departmentRepository.delete(department);
    }
}