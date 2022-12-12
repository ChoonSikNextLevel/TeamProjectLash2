package com.lash.lashClone.service;

import com.lash.lashClone.repository.shop.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;

    @Override
    public Map<String, Object> getOrderUser(String username) {

        System.out.println(orderRepository.getOrderUser(username));

        return orderRepository.getOrderUser(username);
    }


}
