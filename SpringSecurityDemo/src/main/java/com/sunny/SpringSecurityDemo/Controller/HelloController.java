package com.sunny.SpringSecurityDemo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController()

public class HelloController {
	
	@GetMapping("/")
	public String greet(HttpServletRequest req) {
		return "Hello World \n"+req.getSession().getId();
		
	}
}
