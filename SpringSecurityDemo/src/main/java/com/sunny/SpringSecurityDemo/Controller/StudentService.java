package com.sunny.SpringSecurityDemo.Controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class StudentService {
	
	List<Student> students = new ArrayList<>(
		    Arrays.asList(
		        new Student(101,"mani",100),
		        new Student(102,"virat",100),
		        new Student(103,"sunny",200)
		    )
		);
	
	
	public List<Student> getStudents(){
		return students;
	}
	
	public void addStudent(Student student) {
		students.add(student);
	}

}
