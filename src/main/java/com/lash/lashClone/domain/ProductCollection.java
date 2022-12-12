package com.lash.lashClone.domain;


//import com.lash.lashClone.dto.shop.ProductCollectionRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductCollection {
    private int product_id;
    private String category;
    private String name;
    private String color_code;
    private String color;
    private int price;
    private String img_name;
//    private int product_total_count;

//    public ProductCollectionRespDto collectionRespDto() {
//        return  ProductCollectionRespDto.builder()
//                .productId(product_id)
//                .category(category)
//                .name(name)
//                .colorCode(color_code)
//                .color(color)
//                .price(price)
//                .imgName(img_name)
////                .productTotalCount(product_total_count)
//                .build();
//
//    }


}
