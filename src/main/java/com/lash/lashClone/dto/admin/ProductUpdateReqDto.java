package com.lash.lashClone.dto.admin;

import com.lash.lashClone.domain.Product;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class ProductUpdateReqDto {

    @Min(value = 0, message = "상품 코드는 양수만 입력 가능합니다.")
    private int productId;

    @NotBlank(message = "제품 카테고리를 선택하세요.")
    private String category;

    @NotBlank(message = "제품명을 입력하세요.")
    private String name;

    @NotBlank(message = "제품의 색상 코드를 입력하세요.")
    private String colorCode;

    @NotBlank(message = "제품의 색상을 입력하세요.")
    private String color;

    @Min(value = 0, message = "제품 금액을 양식에 맞게 입력하세요.")
    private int price;

    // Null 가능한 항목들
    private String productFeatures;
    private String description;

    // 이미지 추가, 삭제 시 사용
    private List<String> deleteImgFiles;
    private List<MultipartFile> addImgFiles;

    public Product productEntity() {
        return Product.builder()
                .product_id(productId)
                .category(category)
                .name(name)
                .color_code(colorCode)
                .color(color)
                .price(price)
                .product_features(productFeatures)
                .description(description)
                .build();
    }

}























