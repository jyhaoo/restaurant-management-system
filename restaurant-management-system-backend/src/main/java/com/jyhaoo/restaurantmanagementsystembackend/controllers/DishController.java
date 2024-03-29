package com.jyhaoo.restaurantmanagementsystembackend.controllers;

import com.jyhaoo.restaurantmanagementsystembackend.domain.dto.DishDto;
import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;
import com.jyhaoo.restaurantmanagementsystembackend.mappers.Mapper;
import com.jyhaoo.restaurantmanagementsystembackend.services.DishService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class DishController {

    private final DishService dishService;

    private final Mapper<DishEntity, DishDto> dishMapper;

    public DishController(DishService dishService, Mapper dishMapper) {
        this.dishService = dishService;
        this.dishMapper = dishMapper;
    }

    @PostMapping(path = "/dishes")
    public ResponseEntity<DishEntity> createDish(@RequestBody DishEntity dishEntity) {
        DishEntity savedDishEntity = dishService.save(dishEntity);
        return new ResponseEntity<>(savedDishEntity, HttpStatus.CREATED);
    }

    @GetMapping(path = "/dishes")
    public List<DishDto> listDishes() {
        List<DishEntity> dishes = dishService.findAll();
        return dishes.stream()
                .map(dishMapper::mapTo)
                .collect(Collectors.toList());
    }

    @GetMapping(path = "/dishes/{id}")
    public ResponseEntity<DishDto> getDish(@PathVariable("id") Long id) {
        Optional<DishEntity> foundDish = dishService.findOne(id);
        return foundDish.map(dishEntity -> {
            DishDto dishDto = dishMapper.mapTo(dishEntity);
            return new ResponseEntity<>(dishDto, HttpStatus.OK);
        }).orElse(
                new ResponseEntity<>(HttpStatus.NOT_FOUND)
        );
    }
}
