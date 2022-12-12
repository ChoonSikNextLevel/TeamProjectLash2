package com.lash.lashClone.repository.account;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.Order;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MyPageOrderRepository {
    public List<Order> getMyPageOrder(String username) ;
}
