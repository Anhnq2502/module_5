package com.example.be.repository;

import com.example.be.model.Product;
import com.example.be.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeRepository extends JpaRepository<Type,Integer> {
    @Query(value = "SELECT * FROM product.type", nativeQuery = true)
    List<Type> findAllType();
}
