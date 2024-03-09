package com.jyhaoo.restaurantmanagementsystembackend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jyhaoo.restaurantmanagementsystembackend.domain.dto.DishDto;
import com.jyhaoo.restaurantmanagementsystembackend.domain.entities.DishEntity;
import com.jyhaoo.restaurantmanagementsystembackend.services.DishService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
public class DishControllerIntegrationTests {


    private final DishService dishService;

    private final MockMvc mockMvc;

    private final ObjectMapper objectMapper;

    @Autowired
    public DishControllerIntegrationTests(DishService dishService, MockMvc mockMvc, ObjectMapper objectMapper) {
        this.dishService = dishService;
        this.mockMvc = mockMvc;
        this.objectMapper = objectMapper;
    }

    /* HTTP Status Codes */
    @Test
    public void testThatPostDishesReturnsHttpStatus200() throws Exception {
        DishDto dishDto = TestDataUtil.createTestDishDto();
        String dishJson = objectMapper.writeValueAsString(dishDto);
        mockMvc.perform(
                MockMvcRequestBuilders.post("/dishes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(dishJson)
        ).andExpect(MockMvcResultMatchers.status().isCreated());
    }

    @Test
    public void testThatListDishesReturnsHttpStatus200() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/dishes")
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void testThatGetDishReturnsHttpStatus200ForExistingDish() throws Exception {
        DishEntity dishEntity = TestDataUtil.createTestDishEntityA();
        dishService.save(dishEntity);

        mockMvc.perform(
                MockMvcRequestBuilders.get("/dishes/" + dishEntity.getId())
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(MockMvcResultMatchers.status().isOk());
    }

    /* Create & Read */
    @Test
    public void testThatListDishesReturnsDish() throws Exception {
        DishEntity dishEntity = TestDataUtil.createTestDishEntityA();
        dishService.save(dishEntity);

        mockMvc.perform(
                MockMvcRequestBuilders.get("/dishes")
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(MockMvcResultMatchers.jsonPath("$.[0].id").value(dishEntity.getId())
        ).andExpect(MockMvcResultMatchers.jsonPath("$.[0].name").value(dishEntity.getName())
        ).andExpect(MockMvcResultMatchers.jsonPath("$.[0].price").value(dishEntity.getPrice()));
    }
}
