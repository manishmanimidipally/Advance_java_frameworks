package com.hospital.HospitalManagementApplication.service;






import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.HospitalManagementApplication.model.Patient;
import com.hospital.HospitalManagementApplication.repository.PatientRepository;



@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(Integer id) {
        return patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
    }

    public Patient updatePatient(Integer id, Patient patient) {

        Patient existingPatient = getPatientById(id);

        existingPatient.setName(patient.getName());
        existingPatient.setAge(patient.getAge());
        existingPatient.setGender(patient.getGender());
        existingPatient.setPhone(patient.getPhone());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setAddress(patient.getAddress());

        return patientRepository.save(existingPatient);
    }

    public void deletePatient(Integer id) {

        Patient patient = getPatientById(id);

        patientRepository.delete(patient);
    }
}
