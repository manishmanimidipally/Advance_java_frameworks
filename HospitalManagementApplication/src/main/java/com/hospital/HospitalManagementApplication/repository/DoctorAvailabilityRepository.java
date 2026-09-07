package com.hospital.HospitalManagementApplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.HospitalManagementApplication.model.DoctorAvailability;

public interface DoctorAvailabilityRepository
        extends JpaRepository<DoctorAvailability, Integer> {

    List<DoctorAvailability> findByDoctorId(Integer doctorId);
}