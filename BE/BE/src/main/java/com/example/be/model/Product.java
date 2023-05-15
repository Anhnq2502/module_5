package com.example.be.model;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    @Column(name = "product_code")
    private int productCode;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "date_add")
    private String dateAdd;
    @Column(name = "quantity")
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "type_id")
    private Type type;

    public Product() {
    }

    public Product(int productId, int productCode, String productName, String dateAdd, int quantity, Type type) {
        this.productId = productId;
        this.productCode = productCode;
        this.productName = productName;
        this.dateAdd = dateAdd;
        this.quantity = quantity;
        this.type = type;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getProductCode() {
        return productCode;
    }

    public void setProductCode(int productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDateAdd() {
        return dateAdd;
    }

    public void setDateAdd(String dateAdd) {
        this.dateAdd = dateAdd;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
