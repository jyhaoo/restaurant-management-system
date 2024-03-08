package com.jyhaoo.restaurantmanagementsystembackend.services.impl;

import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;
import com.jyhaoo.restaurantmanagementsystembackend.repositories.DishRepository;
import com.jyhaoo.restaurantmanagementsystembackend.services.DishService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class DishServiceImpl implements DishService {

    private final DishRepository dishRepository;

    public DishServiceImpl(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    @Override
    public DishEntity save(DishEntity dishEntity) {
        return dishRepository.save(dishEntity);
    }

    @Override
    public List<DishEntity> findAll() {
        return StreamSupport.stream(dishRepository
                .findAll()
                .spliterator(),
        false).collect(Collectors.toList());
    }
}
