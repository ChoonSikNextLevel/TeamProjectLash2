package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Order;

import java.util.List;

public interface OrderManagementService {

    public List<Order> getOrder(Order order) throws Exception;

    public int updateStatus(String status, String order_id, int product_id) throws Exception;
}
