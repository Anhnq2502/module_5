package com.example.be.service.impl;

import com.example.be.model.Type;
import com.example.be.repository.ITypeRepository;
import com.example.be.service.ITypeService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeService implements ITypeService {
    private final ITypeRepository iTypeRepository;

    public TypeService(ITypeRepository iTypeRepository) {
        this.iTypeRepository = iTypeRepository;
    }

    @Override
    public List<Type> findAllType() {
        return iTypeRepository.findAllType();
    }
}
