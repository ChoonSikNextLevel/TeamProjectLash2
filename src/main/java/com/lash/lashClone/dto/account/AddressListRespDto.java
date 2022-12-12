package com.lash.lashClone.dto.account;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AddressListRespDto {
    private String username;

    private int addressId;
    private int memberId;
    private String addressName;
    private String recipient;
    private String name;
    private String landPhone;
    private String mobilePhone;
    private String addressNumber;
    private String address;
    private String addressDetail;

}
