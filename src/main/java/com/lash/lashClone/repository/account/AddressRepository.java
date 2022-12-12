package com.lash.lashClone.repository.account;

import com.lash.lashClone.domain.Address;
import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.Product;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AddressRepository {


        public int save(Address address);
        public Map<String, Object> getMemberId(String username);

        public List<Address> addressList(String username) throws Exception;

        public int deleteAddress(int addressId) throws Exception;
//

}
