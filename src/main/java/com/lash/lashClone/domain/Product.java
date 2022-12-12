package com.lash.lashClone.domain;

import com.lash.lashClone.dto.admin.ProductListRespDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    private int product_id;
    private String category;
    private String name;
    private String color_code;
    private String color;
    private int price;

    private String product_features;
    private String description;

    private List<ProductImg> product_imgs;

    private LocalDateTime create_date;
    private LocalDateTime update_date;

    private int product_total_count;

    public ProductListRespDto productListRespDto() {
        return ProductListRespDto.builder()
                .productId(product_id)
                .category(category)
                .name(name)
                .colorCode(color_code)
                .color(color)
                .price(price)
                .productFeatures(product_features)
                .description(description)
                .productImgs(product_imgs)
                .productTotalCount(product_total_count)
                .build();

    }

}
