package com.example.be.service;

import com.example.be.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findALlProduct();
    Product findProductByProductId(int productId);
    void edit(Product product);
    Product save(Product product);
    Optional<Product> findById(int productId);
}
