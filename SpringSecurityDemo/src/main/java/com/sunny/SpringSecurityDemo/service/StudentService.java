package com.sunny.SpringSecurityDemo.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sunny.SpringSecurityDemo.model.Student;

@Service
public class StudentService {
	
	List<Student> students = new ArrayList<>(Arrays.asList(new Student(101,"Mani",100),new Student(102,"sunny",100)));
	
	public List<Student> getStudents(){
		return students;
	}
	
}
