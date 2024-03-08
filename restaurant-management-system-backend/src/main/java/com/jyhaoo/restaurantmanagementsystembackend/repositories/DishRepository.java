package com.jyhaoo.restaurantmanagementsystembackend.repositories;

import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepository extends CrudRepository<DishEntity, Long> {

}
