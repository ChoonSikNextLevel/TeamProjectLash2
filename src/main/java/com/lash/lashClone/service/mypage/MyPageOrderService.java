package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.Order;
import com.lash.lashClone.dto.account.UserUpdateReqDto;
import com.lash.lashClone.service.auth.PrincipalDetails;

import java.util.List;

public interface MyPageOrderService {
    public List<Order> getMyPageOrder(String username) throws Exception;
}
