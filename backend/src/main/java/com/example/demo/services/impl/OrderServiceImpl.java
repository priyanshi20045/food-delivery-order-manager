package com.example.demo.services.impl;

import com.example.demo.entity.Order;
import com.example.demo.repository.OrderRepository;
import com.example.demo.services.OrderService;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> filterOrders(boolean isPaid, double maxDistance) {
        return orderRepository.findAll()
                .stream()
                .filter(order -> order.isPaid() == isPaid)
                .filter(order -> order.getDeliveryDistance() <= maxDistance)
                .collect(Collectors.toList());
    }

    @Override
    public Order assignDelivery(double maxDistance) {

        return orderRepository.findAll()
                .stream()
                .filter(order -> !order.isPaid())
                .filter(order -> order.getDeliveryDistance() <= maxDistance)
                .min(Comparator.comparing(Order::getDeliveryDistance))
                .orElse(null);
    }
}