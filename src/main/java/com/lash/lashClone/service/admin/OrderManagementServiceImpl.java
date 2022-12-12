package com.lash.lashClone.service.admin;

import com.lash.lashClone.domain.Order;
import com.lash.lashClone.repository.admin.OrderManagementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OrderManagementServiceImpl implements OrderManagementService {

    private final OrderManagementRepository orderManagementRepository;

    @Override
    public List<Order> getOrder(Order order) throws Exception {

        System.out.println("status :" + order.getStatus());
        System.out.println("orderDate : " + order.getOrder_date());
        System.out.println("endDate : " + order.getHistory_end_date());
        System.out.println("startDate : " + order.getHistory_start_date());

        return orderManagementRepository.getOrder(order);
    }

    @Override
    public int updateStatus(String status, String order_id, int product_id) throws Exception {

        Map<String, Object> map = new HashMap<String, Object>();

        map.put("status", status);
        map.put("order_id", order_id);
        map.put("product_id", product_id);

        return orderManagementRepository.updateStatus(map);
    }
}
