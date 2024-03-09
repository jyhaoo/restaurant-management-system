package com.jyhaoo.restaurantmanagementsystembackend.services;

import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;

import java.util.List;
import java.util.Optional;

public interface DishService {

    DishEntity save(DishEntity dishEntity);

    List<DishEntity> findAll();

    Optional<DishEntity> findOne(Long id);
}
