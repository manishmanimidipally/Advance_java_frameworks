package com.hospital.HospitalManagementApplication.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.hospital.HospitalManagementApplication.model.DoctorAvailability;
import com.hospital.HospitalManagementApplication.service.DoctorAvailabilityService;

@RestController
@RequestMapping("/api/availability")
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorAvailabilityController {

    private final DoctorAvailabilityService availabilityService;

    public DoctorAvailabilityController(
            DoctorAvailabilityService availabilityService) {

        this.availabilityService = availabilityService;
    }

    @PostMapping("/doctor/{doctorId}")
    public DoctorAvailability addAvailability(
            @PathVariable Integer doctorId,
            @RequestBody DoctorAvailability availability) {

        return availabilityService.addAvailability(
                doctorId,
                availability);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<DoctorAvailability> getDoctorAvailability(
            @PathVariable Integer doctorId) {

        return availabilityService.getDoctorAvailability(doctorId);
    }

    @DeleteMapping("/{id}")
    public String deleteAvailability(
            @PathVariable Integer id) {

        availabilityService.deleteAvailability(id);

        return "Availability deleted successfully";
    }
}