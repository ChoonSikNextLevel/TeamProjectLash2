package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductImg {
    private int id;
    private int product_id;
    private String img_name;
    private LocalDateTime create_date;
    private LocalDateTime update_date;
}