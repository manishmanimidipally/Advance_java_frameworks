package com.example.myspring.demoSpringBoot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myspring.demoSpringBoot.model.Products;
import com.example.myspring.demoSpringBoot.service.ProductService;


@RestController
public class ProductController{
	
	@Autowired
	private ProductService service;
	
	
	
	//Get All Products
	@RequestMapping("/products")
	public List<Products> getProducst(){
		return service.getProducts();
	}
	
	//Get product By Id 
	@GetMapping("/products/{prod_id}")
	public Products getProductById(@PathVariable int prod_id) {
		return service.getProductById(prod_id);
	}
	
	
	//add a new Product
	//Post the product
	@PostMapping("/products")
	public void addProduct(@RequestBody Products product) {
		service.addProduct(product);
	}
	
	//update a product 
	@PutMapping("/products/{prod_id}")
	public void updateProduct(@RequestBody Products product  ) {
		service.updateProduct(product);
	}
	
	//delete a product 
	@DeleteMapping("/products/{prod_id}")
	public void deleteProduct(@PathVariable int prod_id) {
		service.deleteProduct(prod_id);  
	}
	
	
	
}