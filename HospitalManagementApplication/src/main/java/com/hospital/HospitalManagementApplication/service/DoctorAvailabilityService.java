package com.hospital.HospitalManagementApplication.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.HospitalManagementApplication.model.Doctor;
import com.hospital.HospitalManagementApplication.model.DoctorAvailability;
import com.hospital.HospitalManagementApplication.repository.DoctorAvailabilityRepository;
import com.hospital.HospitalManagementApplication.repository.DoctorRepository;

@Service
public class DoctorAvailabilityService {

    private final DoctorAvailabilityRepository availabilityRepository;
    private final DoctorRepository doctorRepository;

    public DoctorAvailabilityService(
            DoctorAvailabilityRepository availabilityRepository,
            DoctorRepository doctorRepository) {

        this.availabilityRepository = availabilityRepository;
        this.doctorRepository = doctorRepository;
    }

    public DoctorAvailability addAvailability(
            Integer doctorId,
            DoctorAvailability availability) {

        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        availability.setDoctor(doctor);

        return availabilityRepository.save(availability);
    }

    public List<DoctorAvailability> getDoctorAvailability(
            Integer doctorId) {

        return availabilityRepository.findByDoctorId(doctorId);
    }

    public void deleteAvailability(Integer id) {

        DoctorAvailability availability =
                availabilityRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Availability not found"));

        availabilityRepository.delete(availability);
    }
}