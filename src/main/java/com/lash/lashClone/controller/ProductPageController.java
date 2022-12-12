package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

// 제품 전체, 디테일 페이지 로딩

@RequestMapping("/products")
@Controller
public class ProductPageController {

    // category로 mapping 주소 설정
    @GetMapping("/collection/{category}")
    public String loadProductAllPage(@PathVariable String category) {
        return "page_product/product_all";
    }

    // 제품 별 디테일 page mapping
    @GetMapping("/product/{name}/{colorCode}")
    public String loadProductDetailPage(@PathVariable String name, @PathVariable String colorCode) {
        return "page_product/product_detail";
    }
}
