package com.hospital.HospitalManagementApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.HospitalManagementApplication.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

} 