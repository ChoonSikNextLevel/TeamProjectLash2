package com.lash.lashClone.dto.shop;

import com.lash.lashClone.domain.Cart;
import com.lash.lashClone.domain.OrderVo;
import lombok.Builder;
import lombok.Data;
import net.minidev.json.JSONArray;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class OrderReqDto {

    private String order_id;
    private String orderItems;

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


    public OrderVo orderVo() {
        return OrderVo.builder()
                .order_id(order_id)
                //.orderItems()
                .orderer(orderer)
                .or_mobile_phone(or_mobile_phone)
                .or_address_number(or_address_number)
                .or_address(or_address)
                .or_address_detail(or_address_detail)
                .or_email(or_email)

                .recipient(recipient)
                .re_mobile_phone(re_mobile_phone)
                .re_address_number(re_address_number)
                .re_address(re_address)
                .re_address_detail(re_address_detail)
                .message(message)

                .build();
    }
}
