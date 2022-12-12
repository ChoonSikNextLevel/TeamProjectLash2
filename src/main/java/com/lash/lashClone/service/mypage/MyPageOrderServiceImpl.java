package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.Order;
import com.lash.lashClone.repository.account.MyPageOrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MyPageOrderServiceImpl implements MyPageOrderService{
    private final MyPageOrderRepository myPageOrderRepository;

    @Override
    public List<Order> getMyPageOrder(String username) throws Exception {
        System.out.println(username);
        List<Order> orderList = myPageOrderRepository.getMyPageOrder(username);
        return orderList;
    }
}
