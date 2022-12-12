package com.lash.lashClone.dto.admin;

import com.lash.lashClone.domain.Product;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class ProductRegistReqDto {

    private String category;
    private String name;
    private String colorCode;
    private String color;
    private int price;
    private String productFeatures;
    private String description;

    private List<MultipartFile> productImgs;

    public Product toProduct() {
        return Product.builder()
                .category(category)
                .name(name)
                .color_code(colorCode)
                .color(color)
                .price(price)
                .product_features(productFeatures)
                .description(description)
//                .product_imgs(productImgs)
                .build();
    }
}