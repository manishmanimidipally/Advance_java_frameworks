package com.hospital.HospitalManagementApplication.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.HospitalManagementApplication.model.Appointment;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Integer> {

    boolean existsByDoctorIdAndAppointmentDate(
            Integer doctorId,
            LocalDateTime appointmentDate);

    List<Appointment> findByDoctorIdOrderByAppointmentDateAsc(
            Integer doctorId);

    List<Appointment> findByPatientIdOrderByAppointmentDateAsc(
            Integer patientId);
}