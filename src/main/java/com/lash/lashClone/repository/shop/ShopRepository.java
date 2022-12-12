package com.lash.lashClone.repository.shop;

import com.lash.lashClone.domain.ProductCollection;
import com.lash.lashClone.domain.ProductDetail;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ShopRepository {

    public List<ProductCollection> getProductCollection(String category) throws Exception;

    public List<ProductDetail> getProduct(String name) throws Exception;

    public int addToBag(Map<String, String> map) throws Exception;

    public int updateCount(Map<String, String> map) throws  Exception;

    public Map<String, Object> checkCart(Map<String, String> map) throws Exception;
}
