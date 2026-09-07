package com.hospital.HospitalManagementApplication.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.hospital.HospitalManagementApplication.dto.AppointmentRequest;
import com.hospital.HospitalManagementApplication.model.Appointment;
import com.hospital.HospitalManagementApplication.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping
    public Appointment bookAppointment(
            @RequestBody AppointmentRequest request) {

        return appointmentService.bookAppointment(request);
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/id/{id}")
    public Appointment getAppointmentById(
            @PathVariable Integer id) {

        return appointmentService.getAppointmentById(id);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Appointment> getDoctorAppointments(
            @PathVariable Integer doctorId) {

        return appointmentService.getDoctorAppointments(doctorId);
    }

    @GetMapping("/patient/{patientId}")
    public List<Appointment> getPatientAppointments(
            @PathVariable Integer patientId) {

        return appointmentService.getPatientAppointments(patientId);
    }

    @GetMapping("/available")
    public List<LocalTime> getAvailableSlots(
            @RequestParam Integer doctorId,
            @RequestParam String date) {

        LocalDate localDate = LocalDate.parse(date);

        return appointmentService.getAvailableSlots(
                doctorId,
                localDate);
    }

    @DeleteMapping("/{id}")
    public String deleteAppointment(
            @PathVariable Integer id) {

        appointmentService.deleteAppointment(id);

        return "Appointment deleted successfully";
    }
}