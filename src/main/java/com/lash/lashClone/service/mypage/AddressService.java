package com.lash.lashClone.service.mypage;


import com.lash.lashClone.domain.Address;
import com.lash.lashClone.dto.account.AddressListRespDto;
import com.lash.lashClone.dto.account.AddressReqDto;


import java.util.List;

public interface AddressService {
    // 배송지 등록 등록
    public boolean addAddress(AddressReqDto addressReqDto, String username) throws Exception;

    // 상품 리스트 조회
    public List<Address> addressList(String username) throws Exception;

    public boolean deleteAddress(int addressId) throws Exception;
}

