package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderVo {
    private String order_id;
    private List<Cart> orderItems;

    private String orderer;
    private String or_mobile_phone;
    private String or_address;
    private String or_address_detail;
    private String or_address_number;
    private String or_email;

    private String recipient;
    private String re_mobile_phone;
    private String re_address;
    private String re_address_detail;
    private String re_address_number;

    private String message;


    private String product_id;
    private int member_id;
}
