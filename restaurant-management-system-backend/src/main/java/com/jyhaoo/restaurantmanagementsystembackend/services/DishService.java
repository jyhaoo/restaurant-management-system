package com.jyhaoo.restaurantmanagementsystembackend.services;

import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;

import java.util.List;

public interface DishService {

    DishEntity save(DishEntity dishEntity);

    List<DishEntity> findAll();
}
