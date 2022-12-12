package com.lash.lashClone.repository;

import com.lash.lashClone.domain.Cart;
import com.lash.lashClone.domain.OrderVo;
import com.lash.lashClone.domain.ProductDetail;
import com.lash.lashClone.dto.shop.OrderReqDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface CartRepository {

    public List<Cart> getCart(String username) throws Exception;

    public int deleteCart(Map<String, String> map) throws Exception;

    public int plusCount(Map<String, Object> map) throws Exception;

    public int minusCount(Map<String, Object> map) throws Exception;

    public int orderInfo(OrderVo orderVo) throws Exception;

    public int orderOne(OrderVo orderVo) throws Exception;
}
