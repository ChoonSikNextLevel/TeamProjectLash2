package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.dto.account.AddressReqDto;
import com.lash.lashClone.repository.account.AddressRepository;
//import com.lash.lashClone.repository.account.MyPageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressServicelmpl implements AddressService {

    private final AddressRepository addressRepository;
//    private final MyPageRepository myPageRepository;


    //주소 등록
    @Override
    public boolean addAddress(AddressReqDto addressReqDto, String username) throws Exception {
        int result = 0;
        System.out.println(addressReqDto);
        Address address = addressReqDto.toAddress();
        System.out.println(Integer.valueOf(addressRepository.getMemberId(username).get("member_id").toString()));

        address.setMember_id(Integer.valueOf(addressRepository.getMemberId(username).get("member_id").toString()));
        System.out.println(address);
        result = addressRepository.save(address);

        if(result ==0) {
            return false;
        }
        return true;
    }

    @Override
    public List<Address> addressList(String username) throws Exception {
        return addressRepository.addressList(username);
    }

    @Override
    public boolean deleteAddress(int addressId) throws Exception {

        return addressRepository.deleteAddress(addressId) > 0;
    }

    // 주소 삭제
//    @Override
//    public boolean deleteAddress(int addressId) throws Exception {
//
//        String addressId = AdressRepository.getAddressId;
//
//        if(productRepository.deleteProduct(productId) > 0) {
//            productImgs.forEach(productImg -> {
//                Path uploadPath = Paths.get(filePath + "/product/" + productImg.getImg_name());
//
//                File file = new File(uploadPath.toUri());
//                if(file.exists()) {
//                    file.delete();
//                }
//            });
//            return true;
//        }
//        return false;
//    }
//


}

