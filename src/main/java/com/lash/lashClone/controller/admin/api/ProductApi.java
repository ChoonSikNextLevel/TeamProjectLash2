package com.lash.lashClone.controller.admin.api;

import com.lash.lashClone.dto.CMRespDto;
import com.lash.lashClone.dto.admin.ProductRegistReqDto;
import com.lash.lashClone.dto.admin.ProductUpdateReqDto;
import com.lash.lashClone.service.admin.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/admin")
@RestController
@RequiredArgsConstructor
public class ProductApi {

    private final ProductService productService;


    // 상품 등록
    @PostMapping("/product/registration")
    public ResponseEntity<?> addProduct(ProductRegistReqDto productRegistReqDto) throws Exception {


        return ResponseEntity
                .created(null)
                .body(new CMRespDto<>(1, "success", productService.addProduct(productRegistReqDto)));

    }

    // 상품 조회(리스트)
    @GetMapping("/products")
    public ResponseEntity<?> productList(@RequestParam @Nullable String category,
                                         @RequestParam @Nullable String searchValue) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", productService.productList(category, searchValue)));

    }

    // 상품 정보 수정
    @PostMapping("/product/update")
    public ResponseEntity<?> updateProduct(ProductUpdateReqDto productUpdateReqDto) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", productService.updateProduct(productUpdateReqDto)));
    }

    // 상품 삭제
    @DeleteMapping("/product/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable int productId) throws Exception {

        return ResponseEntity.ok(new CMRespDto<>(1, "success", productService.deleteProduct(productId)));

    }




}
