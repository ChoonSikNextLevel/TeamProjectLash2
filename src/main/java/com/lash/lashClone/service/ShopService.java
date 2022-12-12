package com.lash.lashClone.service;

import com.lash.lashClone.domain.ProductCollection;
import com.lash.lashClone.domain.ProductDetail;

import java.util.List;

public interface ShopService {

    public List<ProductCollection> getProductCollection(String category) throws Exception;

    public List<ProductDetail> getProductDetail(String name, String colorCode) throws Exception;

    public int addToBag(String username, String name, String colorCode) throws Exception;

//    public int updateCount(int productCount) throws Exception;

}
