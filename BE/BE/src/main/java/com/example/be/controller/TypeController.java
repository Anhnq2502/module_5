package com.example.be.controller;

import com.example.be.model.Product;
import com.example.be.model.Type;
import com.example.be.service.ITypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type")
@CrossOrigin("*")
public class TypeController {
    private final ITypeService iTypeService;

    public TypeController(ITypeService iTypeService) {
        this.iTypeService = iTypeService;
    }
    @GetMapping("")
    public ResponseEntity<List<Type>> findAllProduct() {
        List<Type> types = (List<Type>) iTypeService.findAllType();
        if (types.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(types, HttpStatus.OK);
    }
}
