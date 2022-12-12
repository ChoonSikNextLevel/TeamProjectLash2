package com.lash.lashClone.dto.account;

import com.lash.lashClone.domain.ProductImg;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Builder
@Data
public class MyPageOrderRespDto {
    private LocalDate order_date;
    private int member_id;
    private String order_id;
    private int product_id;
    private int product_count;
//    private LocalDate history_end_date;
//    private LocalDate history_start_date;
    private String status;
    private String name;
    private String color_code;
    private int price;
    private String productImgs;
}
