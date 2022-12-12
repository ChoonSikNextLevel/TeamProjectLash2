package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDetail {
    private int product_id;

    private String name;
    private String color_code;
    private String color;
    private int price;

    private String product_features;
    private String description;

    private List<ProductImg> product_imgs;
}
