package com.example.myspring.demoSpringBoot.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myspring.demoSpringBoot.model.Products;


@Repository
public interface ProductRepo  extends JpaRepository<Products,Integer>{

}
