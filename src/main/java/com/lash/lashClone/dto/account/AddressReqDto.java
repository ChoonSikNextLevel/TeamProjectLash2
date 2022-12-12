package com.lash.lashClone.dto.account;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.dto.validation.ValidationGroups;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
@Builder
@Data
public class AddressReqDto {
    @NotBlank(message = "배송지명 작성하기.", groups = ValidationGroups.NotBlankGroup.class)
    private String address_name;
    @NotBlank(message = "성명 작성하기.", groups = ValidationGroups.NotBlankGroup.class)
    private String recipient;
    @NotBlank(message = "선택하기.", groups = ValidationGroups.NotBlankGroup.class)
    private String first_land_phone;

    @NotBlank(message = "두번째를 비워둘수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 2, max = 4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "첫번째 번호숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String middle_land_phone;

    @NotBlank(message = "마지막을 비워둘수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 2, max = 4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "첫번째 번호숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String last_land_phone;

    @NotBlank(message = "선택하기.", groups = ValidationGroups.NotBlankGroup.class)
    private String first_mobile_phone;

    @NotBlank(message = "마지막을 비워둘수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 2, max = 4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "첫번째 번호숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String middle_mobile_phone;

    @NotBlank(message = "마지막을 비워둘수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 2, max = 4, message = "4자리 만", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "첫번째 번호숫자만 4자리 가능",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String last_mobile_phone;

    @NotBlank(message = "주소 비워 둘수 없다.", groups = ValidationGroups.NotBlankGroup.class)
    private String address_number;

    @NotBlank(message = "주소 비워 둘수 없다.", groups = ValidationGroups.NotBlankGroup.class)
    private String address;

    @NotBlank(message = "상세 주소 비워 둘수 없다.", groups = ValidationGroups.NotBlankGroup.class)
    private String address_detail;

    public Address toAddress() {
        return Address.builder()
                .address_name(address_name)
                .recipient(recipient)
                .address_number(address_number)
                .address(address)
                .address_detail(address_detail)
                .land_phone(first_land_phone + middle_land_phone + last_land_phone)
                .mobile_phone(first_mobile_phone + middle_mobile_phone + last_mobile_phone)

                .build();
    }
}
