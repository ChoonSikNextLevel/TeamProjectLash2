package com.lash.lashClone.repository.admin;

import com.lash.lashClone.domain.Product;
import com.lash.lashClone.domain.ProductImg;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ProductRepository {
    public int saveProduct(Product product) throws Exception;

    public int saveImgs(List<ProductImg> product_imgs) throws Exception;

    public List<Product> productList(Map<String, Object> map) throws Exception;

    public int updateProduct(Product product) throws Exception;

    public int deleteImgFiles(Map<String, Object> map) throws Exception;

    public List<ProductImg> getProductImgList(int productId) throws Exception;

    public int deleteProduct(int productId) throws Exception;


}
