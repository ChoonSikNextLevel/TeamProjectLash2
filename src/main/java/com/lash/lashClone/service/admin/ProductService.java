package com.lash.lashClone.service.admin;

import com.lash.lashClone.dto.admin.ProductListRespDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.dto.admin.ProductUpdateReqDto;

import java.util.List;

public interface ProductService {

    // 상품 등록
    public boolean addProduct(ProductRegistReqDto productRegistReqDto) throws Exception;

    // 상품 조회(리스트)
    public List<ProductListRespDto> productList(String category, String searchValue) throws Exception;

    // 상품 수정
    public boolean updateProduct(ProductUpdateReqDto productUpdateReqDto) throws Exception;

    // 상품 삭제
    public boolean deleteProduct(int productId) throws Exception;
}
