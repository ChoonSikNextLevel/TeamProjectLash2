package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;

import com.lash.lashClone.domain.Order;
import com.lash.lashClone.dto.account.OrderCountRespDto;
import com.lash.lashClone.repository.account.MyPageRepository;
import com.lash.lashClone.repository.shop.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService {
    private final MyPageRepository myPageRepository;
    private final OrderRepository orderRepository;
    // 마이페이지 이름
    @Override
    public Member memberList(String username) throws Exception {
        return myPageRepository.memberList(username);
    }

    @Override
    public List<OrderCountRespDto> getOrderCount(String username) throws Exception {


        List<OrderCountRespDto> list = new ArrayList<OrderCountRespDto>();
        List<Order> orderCounts = orderRepository.getOrderCount(username);

        for(Order orderCount: orderCounts) {
            list.add(OrderCountRespDto.builder()
                    .member_id(orderCount.getMember_id())
                    .status(orderCount.getStatus())
                    .order_count(orderCount.getOrder_count()).build());
        }

        return list;
    }
}
