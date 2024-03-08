package com.jyhaoo.restaurantmanagementsystembackend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DishDto {

    private Long id;

    private String name;

    private double price;
}
