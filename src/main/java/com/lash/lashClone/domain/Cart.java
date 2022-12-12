package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Cart {
    private int member_id;
    private String username;
    private String name;

    private int cart_id;

    private String category;
    private int product_id;
    private int product_count;
    private String color_code;
    private String color;
    private int price;

    private String img_name;


}
