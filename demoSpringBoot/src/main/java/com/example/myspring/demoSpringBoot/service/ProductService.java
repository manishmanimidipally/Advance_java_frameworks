package com.example.myspring.demoSpringBoot.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myspring.demoSpringBoot.model.Products;
import com.example.myspring.demoSpringBoot.respository.ProductRepo;

@Service
public class ProductService{
	
	/*List<Products> products = new ArrayList<>(Arrays.asList(new Products(101,"iphone",130000),new Products(102,"Macbook",150000),new Products(103,"Ac",40000)));*/
	@Autowired
    ProductRepo repo;

	public List<Products> getProducts(){
		return repo.findAll();
	}

	public Products getProductById(int prod_id) {
		
		return repo.findById(prod_id).orElse(new Products());
	}
	
	public void addProduct(Products product) {
		repo.save(product);
	}

	public void updateProduct(Products prod) {
		
		 repo.save(prod);
	}

	public void deleteProduct(int prod_id) {
		
		repo.deleteById(prod_id);
		
	}
}