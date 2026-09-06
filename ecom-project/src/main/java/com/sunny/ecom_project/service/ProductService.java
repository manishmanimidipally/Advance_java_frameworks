package com.sunny.ecom_project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunny.ecom_project.model.Product;
import com.sunny.ecom_project.repo.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repo;
	
	public List<Product> getProducts(){
		
		
	      
	      
	      
	      
	      return repo.findAll();
	}
	
}
