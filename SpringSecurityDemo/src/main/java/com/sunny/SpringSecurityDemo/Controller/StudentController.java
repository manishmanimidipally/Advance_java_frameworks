package com.sunny.SpringSecurityDemo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.web.csrf.CsrfToken;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	
	@GetMapping("/students")
	public List<Student> getStudents(){
		return service.getStudents();
	}
	
	
	@GetMapping("/csrf-token")
	public CsrfToken getCsrfToken(HttpServletRequest request) {
		return (CsrfToken) request.getAttribute("_csrf");
	}
	
	@PostMapping("/student")
	public void addStudent(@RequestBody Student student) {
		service.addStudent(student);
	}
}
