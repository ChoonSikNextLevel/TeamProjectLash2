package com.lash.lashClone.service;

import com.lash.lashClone.domain.ProductCollection;
import com.lash.lashClone.domain.ProductDetail;
import com.lash.lashClone.repository.shop.ShopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ShopServiceImpl implements ShopService {

    private final ShopRepository shopRepository;


    @Override
    public List<ProductCollection> getProductCollection(String category) throws Exception {

        return shopRepository.getProductCollection(category);
    }



    @Override
    public List<ProductDetail> getProductDetail(String name, String colorCode) throws Exception {

        return shopRepository.getProduct(name);
    }

    @Override
    public int addToBag(String username, String name, String colorCode) throws Exception {

        Map<String, String> map = new HashMap<String, String>();

        map.put("username", username);
        map.put("name", name);
        map.put("colorCode", colorCode);

        if (shopRepository.checkCart(map) == null) {

            if (shopRepository.addToBag(map) == 1) {
                return 1;
            }
            return 0;

        }else{

            if(shopRepository.updateCount(map) == 1) {

                return 1;
            }

            return 0;
        }
    }



//    @Override
//    public int updateCount(int productCount) throws Exception {
//
//        return 0;
//    }



}
