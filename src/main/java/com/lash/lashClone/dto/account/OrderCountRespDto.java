package com.lash.lashClone.dto.account;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class OrderCountRespDto {

    private int member_id;
    private String status;
    private int order_count;

}
