package com.lash.lashClone.repository.shop;

import com.lash.lashClone.domain.Order;
import com.lash.lashClone.dto.account.OrderCountRespDto;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface OrderRepository {

        public Map<String, Object> getOrderUser(String username);

        public List<Order> getOrderCount(String username);

}
