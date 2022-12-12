package com.lash.lashClone.domain;


import com.lash.lashClone.dto.account.AddressListRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String username;

    private int address_id;
    private int member_id;
    private String address_name;
    private String recipient;
    private String land_phone;
    private String mobile_phone;
    private String address_number;
    private String address;
    private String address_detail;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

//    public AddressListRespDto addressListRespDto() {
//        return AddressListRespDto.builder()
//                .addressId(address_id)
//                .memberId(member_id)
//                .addressName(address_name)
//                .recipient(recipient)
//                .landPhone(land_phone)
//                .mobilePhone(mobile_phone)
//                .addressNumber(address_number)
//                .address(address)
//                .addressDetail(address_detail)
//                .build();
//
//    }
}
