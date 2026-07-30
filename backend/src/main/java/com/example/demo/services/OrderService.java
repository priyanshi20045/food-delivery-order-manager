package com.example.demo.services;

import com.example.demo.entity.Order;

import java.util.List;

public interface OrderService {

    Order addOrder(Order order);

    List<Order> getAllOrders();

    List<Order> filterOrders(boolean isPaid, double maxDistance);

    Order assignDelivery(double maxDistance);

}