package com.example.myspring.demoSpringBoot.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.myspring.demoSpringBoot.model.Products;

@Service
public class ProductService{
	
	List<Products> products = new ArrayList<>(Arrays.asList(new Products(101,"iphone",130000),new Products(102,"Macbook",150000),new Products(103,"Ac",40000)));
	
	public List<Products> getProducts(){
		return products;
	}

	public Products getProductById(int prod_id) {
		
		return products.stream().filter(id -> id.getProduct_Id() == prod_id).findFirst().get();
	}
	
	public void addProduct(Products product) {
		products.add(product);
	}

	public void updateProduct(int prod_id,Products prod) {
		for(int i=0;i<products.size();i++) {
			if(products.get(i).getProduct_Id() == prod_id) {
				products.set(i, prod);
				
			}
		}
		 
	}

	public void deleteProduct(int prod_id) {
		
		for(int i=0;i<products.size();i++) {
			if(products.get(i).getProduct_Id() == prod_id) {
				products.remove(i);
			}
		}
		
	}
}