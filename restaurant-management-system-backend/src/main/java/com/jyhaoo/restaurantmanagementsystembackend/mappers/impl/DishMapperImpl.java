package com.jyhaoo.restaurantmanagementsystembackend.mappers.impl;

import com.jyhaoo.restaurantmanagementsystembackend.domain.dto.DishDto;
import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;
import com.jyhaoo.restaurantmanagementsystembackend.mappers.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class DishMapperImpl implements Mapper<DishEntity, DishDto> {
    private final ModelMapper modelMapper;

    public DishMapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public DishDto mapTo(DishEntity dishEntity) {
        return modelMapper.map(dishEntity, DishDto.class);
    }

    @Override
    public DishEntity mapFrom(DishDto dishDto) {
        return modelMapper.map(dishDto, DishEntity.class);
    }
}
