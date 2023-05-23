package com.example.be.controller;

import com.example.be.model.Product;
import com.example.be.service.IProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    private final IProductService iProductService;

    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }
    @GetMapping("")
    public ResponseEntity<List<Product>> findAllProduct() {
        List<Product> products = (List<Product>) iProductService.findALlProduct();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("/{productId}")
    public ResponseEntity<Product> findProductByProductId(@PathVariable int productId) {
        Product product = iProductService.findProductByProductId(productId);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @PutMapping("/{productId}")
    @ResponseBody
    public ResponseEntity<Product> updateProduct(@PathVariable int productId, @RequestBody Product product) {
        Optional<Product> productOptional = iProductService.findById(productId);
        if (!productOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        product.setProductId(productOptional.get().getProductId());
        return new ResponseEntity<>(iProductService.save(product), HttpStatus.OK);
    }
}
