package com.sunny.ecom_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunny.ecom_project.model.Product;
import com.sunny.ecom_project.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	private ProductService service;
	
	@RequestMapping("/")
	public String greet() {
		return "Hi Hello World Namaste";
	}
	
	@RequestMapping("/products")
	public List<Product> getProducts(){
		return service.getProducts();
	}
}
