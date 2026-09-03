package com.example.myspring.demoSpringBoot.model;

public class Products{
	int product_Id;
	String product_Name;
	double product_Price;
	
	 // No-argument constructor
    public Products() {
    }
	
	public Products(int product_Id, String product_Name , double product_Price){
		this.product_Id = product_Id;
		this.product_Name  = product_Name;
		this.product_Price = product_Price;
	}
	
	
	
	public int getProduct_Id() {
		return product_Id;
	}



	public void setProduct_Id(int product_Id) {
		this.product_Id = product_Id;
	}



	public String getProduct_Name() {
		return product_Name;
	}



	public void setProduct_Name(String product_Name) {
		this.product_Name = product_Name;
	}



	public double getProduct_Price() {
		return product_Price;
	}



	public void setProduct_Price(double product_Price) {
		this.product_Price = product_Price;
	}



	public String toString() {
		return "PRoducts : [product_Id "+product_Id+" product_Name "+product_Name+" product_price " +product_Price+"]";
	}
}