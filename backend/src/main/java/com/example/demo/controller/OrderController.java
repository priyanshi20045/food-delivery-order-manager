package com.example.demo.controller;

import com.example.demo.entity.Order;
import com.example.demo.services.OrderService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public Order addOrder(@Valid @RequestBody Order order) {
        return orderService.addOrder(order);
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/filter")
    public List<Order> filterOrders(
            @RequestParam boolean isPaid,
            @RequestParam double maxDistance) {

        return orderService.filterOrders(isPaid, maxDistance);
    }

    @PostMapping("/assign")
    public Order assignDelivery(@RequestParam double maxDistance) {
        return orderService.assignDelivery(maxDistance);
    }
}