package com.example.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @NotBlank(message = "Restaurant name is required")
    private String restaurantName;

    @Min(value = 1, message = "Item count must be at least 1")
    private int itemCount;

    private boolean isPaid;

    @Min(value = 0, message = "Distance cannot be negative")
    private double deliveryDistance;
}