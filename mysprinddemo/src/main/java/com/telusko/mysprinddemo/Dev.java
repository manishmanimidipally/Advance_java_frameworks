package com.telusko.mysprinddemo;



public class Dev {
	
	
	private Laptop laptop;
	
    /*private int age;
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}*/
	
	public void setlaptop(Laptop laptop) {
		this.laptop = laptop;
	}
	
	public Laptop getLaptop() {
		return laptop;
	}
	
	/*public Dev(Laptop laptop) {
		this.laptop=laptop;
	}*/
	public void compier() {
			laptop.compile();
		System.out.println("This is my dev without the spring boot ");
		
	}
}
