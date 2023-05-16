package com.example.be.service;

import com.example.be.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> findALlProduct();
    Product findProductByProductId(int productId);
    void edit(Product product);
}
