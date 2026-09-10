package com.sunny.ecom_project.model;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Column;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    private String name;
	@Column(name = "description")
    private String desc;
    private String brand;
    private BigDecimal price;
    private String category;
    private Date releaseDate;
    private boolean available;
	private Integer stockQuantity;

    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public void setImageType(String imageType) {
		this.imageType = imageType;
	}

	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}

	public Product() {
	}

	public Product(Integer id, String name, String desc, String brand, BigDecimal price,
			String category, Date releaseDate, boolean available, Integer stockQuantity,
			String imageName, String imageType, byte[] imageData) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.brand = brand;
		this.price = price;
		this.category = category;
		this.releaseDate = releaseDate;
		this.available = available;
		this.stockQuantity = stockQuantity;
		this.imageName = imageName;
		this.imageType = imageType;
		this.imageData = imageData;
	}

	public Integer getId() { return id; }
	public void setId(Integer id) { this.id = id; }
	public String getName() { return name; }
	public void setName(String name) { this.name = name; }
	public String getDesc() { return desc; }
	public void setDesc(String desc) { this.desc = desc; }
	public String getBrand() { return brand; }
	public void setBrand(String brand) { this.brand = brand; }
	public BigDecimal getPrice() { return price; }
	public void setPrice(BigDecimal price) { this.price = price; }
	public String getCategory() { return category; }
	public void setCategory(String category) { this.category = category; }
	public Date getReleaseDate() { return releaseDate; }
	public void setReleaseDate(Date releaseDate) { this.releaseDate = releaseDate; }
	public boolean isAvailable() { return available; }
	public void setAvailable(boolean available) { this.available = available; }
	public Integer getStockQuantity() { return stockQuantity; }
	public void setStockQuantity(Integer stockQuantity) { this.stockQuantity = stockQuantity; }
	public String getImageName() { return imageName; }
	public String getImageType() { return imageType; }
	public byte[] getImageData() { return imageData; }
	
	/*public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Date getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}
	public boolean isAvailable() {
		return available;
	}
	public void setAvailable(boolean available) {
		this.available = available;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public String getImageType() {
		return imageType;
	}
	public void setImageType(String imageType) {
		this.imageType = imageType;
	}
	public byte[] getImageData() {
		return imageData;
	}
	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}
	*/
	
	
	
	
}
