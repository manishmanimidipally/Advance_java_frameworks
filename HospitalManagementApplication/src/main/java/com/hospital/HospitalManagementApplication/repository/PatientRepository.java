package com.hospital.HospitalManagementApplication.repository;

import com.hospital.HospitalManagementApplication.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Integer>  {

}
