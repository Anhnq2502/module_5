package com.example.be.repository;

import com.example.be.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "SELECT * FROM product.product", nativeQuery = true)
    List<Product> findAllProduct();
    Product findProductByProductId( int productId);
}
