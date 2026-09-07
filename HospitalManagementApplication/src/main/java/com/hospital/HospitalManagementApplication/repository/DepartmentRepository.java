package com.hospital.HospitalManagementApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.HospitalManagementApplication.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {

}