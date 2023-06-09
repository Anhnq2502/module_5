package com.example.be.service.impl;

import com.example.be.model.Product;
import com.example.be.repository.IProductRepository;
import com.example.be.service.IProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    private final IProductRepository iProductRepository;

    public ProductService(IProductRepository iProductRepository) {
        this.iProductRepository = iProductRepository;
    }

    @Override
    public List<Product> findALlProduct() {
        return iProductRepository.findAllProduct();
    }

    @Override
    public Product findProductByProductId(int productId) {
        return iProductRepository.findProductByProductId(productId);
    }

    @Override
    public void edit(Product product) {
        iProductRepository.save(product);
    }

    @Override
    public Product save(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public Optional<Product> findById(int productId) {
        return iProductRepository.findById(productId);
    }
}
