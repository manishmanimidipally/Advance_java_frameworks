package com.sunny.ecom_project.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunny.ecom_project.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

}
