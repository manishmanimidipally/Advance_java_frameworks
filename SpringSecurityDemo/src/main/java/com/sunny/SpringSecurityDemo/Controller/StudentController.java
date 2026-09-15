package com.sunny.SpringSecurityDemo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.sunny.SpringSecurityDemo.model.Student;
import com.sunny.SpringSecurityDemo.service.StudentService;



@RestController
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	
	@GetMapping("/students")
	public List<Student> getStudents(){
		return service.getStudents();
	}
	
	
}
