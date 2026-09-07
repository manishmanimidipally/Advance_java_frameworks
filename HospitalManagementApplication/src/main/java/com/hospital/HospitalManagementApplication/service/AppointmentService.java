package com.hospital.HospitalManagementApplication.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.HospitalManagementApplication.dto.AppointmentRequest;
import com.hospital.HospitalManagementApplication.model.Appointment;
import com.hospital.HospitalManagementApplication.model.Doctor;
import com.hospital.HospitalManagementApplication.model.DoctorAvailability;
import com.hospital.HospitalManagementApplication.model.Patient;
import com.hospital.HospitalManagementApplication.repository.AppointmentRepository;
import com.hospital.HospitalManagementApplication.repository.DoctorAvailabilityRepository;
import com.hospital.HospitalManagementApplication.repository.DoctorRepository;
import com.hospital.HospitalManagementApplication.repository.PatientRepository;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final DoctorAvailabilityRepository availabilityRepository;

    public AppointmentService(
            AppointmentRepository appointmentRepository,
            PatientRepository patientRepository,
            DoctorRepository doctorRepository,
            DoctorAvailabilityRepository availabilityRepository) {

        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.availabilityRepository = availabilityRepository;
    }


    // ==========================================
    // BOOK APPOINTMENT
    // ==========================================

    public Appointment bookAppointment(
            AppointmentRequest request) {

        Patient patient =
                patientRepository.findById(request.getPatientId())
                .orElseThrow(() ->
                        new RuntimeException("Patient not found"));


        Doctor doctor =
                doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() ->
                        new RuntimeException("Doctor not found"));


        LocalDateTime appointmentDate =
                request.getAppointmentDate();


        // Check doctor availability

        if (!isDoctorAvailable(
                doctor.getId(),
                appointmentDate)) {

            throw new RuntimeException(
                    "Doctor is not available at this time");
        }


        // Check whether slot is already booked

        boolean alreadyBooked =
                appointmentRepository
                .existsByDoctorIdAndAppointmentDate(
                        doctor.getId(),
                        appointmentDate);


        if (alreadyBooked) {

            throw new RuntimeException(
                    "This time slot is already booked");
        }


        // Create appointment

        Appointment appointment =
                new Appointment();

        appointment.setAppointmentDate(
                appointmentDate);

        appointment.setStatus("BOOKED");

        appointment.setReason(
                request.getReason());

        appointment.setPatient(patient);

        appointment.setDoctor(doctor);


        return appointmentRepository.save(
                appointment);
    }


    // ==========================================
    // CHECK DOCTOR AVAILABILITY
    // ==========================================

    private boolean isDoctorAvailable(
            Integer doctorId,
            LocalDateTime appointmentDate) {

        LocalDate date =
                appointmentDate.toLocalDate();

        LocalTime time =
                appointmentDate.toLocalTime();

        String day =
                date.getDayOfWeek().toString();


        List<DoctorAvailability> availabilities =
                availabilityRepository
                .findByDoctorId(doctorId);


        for (DoctorAvailability availability
                : availabilities) {


            // IMPORTANT:
            // Check day is not null

            if (availability.getDay() != null
                    && availability.getDay()
                    .equalsIgnoreCase(day)) {


                LocalTime start =
                        availability.getStartTime();

                LocalTime end =
                        availability.getEndTime();


                if (start != null
                        && end != null
                        && !time.isBefore(start)
                        && time.isBefore(end)) {

                    return true;
                }
            }
        }


        return false;
    }


    // ==========================================
    // GET ALL APPOINTMENTS
    // ==========================================

    public List<Appointment> getAllAppointments() {

        return appointmentRepository.findAll();
    }


    // ==========================================
    // GET APPOINTMENT BY ID
    // ==========================================

    public Appointment getAppointmentById(
            Integer id) {

        return appointmentRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Appointment not found"));
    }


    // ==========================================
    // GET DOCTOR APPOINTMENTS
    // ==========================================

    public List<Appointment> getDoctorAppointments(
            Integer doctorId) {

        return appointmentRepository
                .findByDoctorIdOrderByAppointmentDateAsc(
                        doctorId);
    }


    // ==========================================
    // GET PATIENT APPOINTMENTS
    // ==========================================

    public List<Appointment> getPatientAppointments(
            Integer patientId) {

        return appointmentRepository
                .findByPatientIdOrderByAppointmentDateAsc(
                        patientId);
    }


    // ==========================================
    // GET AVAILABLE TIME SLOTS
    // ==========================================

    public List<LocalTime> getAvailableSlots(
            Integer doctorId,
            LocalDate date) {


        List<LocalTime> availableSlots =
                new ArrayList<>();


        String day =
                date.getDayOfWeek().toString();


        List<DoctorAvailability> availabilities =
                availabilityRepository
                .findByDoctorId(doctorId);


        for (DoctorAvailability availability
                : availabilities) {


            // IMPORTANT:
            // Check for NULL day

            if (availability.getDay() != null
                    && availability.getDay()
                    .equalsIgnoreCase(day)) {


                LocalTime start =
                        availability.getStartTime();

                LocalTime end =
                        availability.getEndTime();


                // Also check start/end for NULL

                if (start == null || end == null) {
                    continue;
                }


                LocalTime slot = start;


                while (slot.isBefore(end)) {


                    LocalDateTime dateTime =
                            LocalDateTime.of(
                                    date,
                                    slot);


                    boolean booked =
                            appointmentRepository
                            .existsByDoctorIdAndAppointmentDate(
                                    doctorId,
                                    dateTime);


                    if (!booked) {

                        availableSlots.add(slot);
                    }


                    // 30 minute slots

                    slot = slot.plusMinutes(30);
                }
            }
        }


        return availableSlots;
    }


    // ==========================================
    // DELETE APPOINTMENT
    // ==========================================

    public void deleteAppointment(
            Integer id) {

        Appointment appointment =
                getAppointmentById(id);

        appointmentRepository.delete(
                appointment);
    }
}