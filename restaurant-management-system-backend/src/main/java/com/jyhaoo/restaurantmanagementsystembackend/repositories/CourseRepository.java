package com.jyhaoo.restaurantmanagementsystembackend.repositories;

import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.CourseEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends CrudRepository<CourseEntity, Long> {
}
