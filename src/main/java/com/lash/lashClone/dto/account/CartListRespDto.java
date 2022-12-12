package com.lash.lashClone.dto.account;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.domain.Cart;
import com.lash.lashClone.domain.ProductImg;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CartListRespDto {
    private int member_id;
    private String username;

    private int cart_id;

    private int product_id;
    private int product_count;
    private String name;
    private String color_code;
    private String color;
    private int price;

    private List<ProductImg> productImgs;

    private String img_name;

    }
