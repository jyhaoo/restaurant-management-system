package com.jyhaoo.restaurantmanagementsystembackend;

import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;

public final class TestDataUtil {

    public static DishEntity createTestDishEntityA() {
        return DishEntity.builder()
                .id(1L)
                .name("Cucumber Salad")
                .price(7.99)
                .build();
    }
}
