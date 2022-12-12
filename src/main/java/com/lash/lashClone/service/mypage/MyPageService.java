package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.OrderCountRespDto;

import java.util.List;

public interface MyPageService {
    // 마이페이지 아이디정보
    public Member memberList(String username) throws Exception;

    public List<OrderCountRespDto> getOrderCount(String username) throws Exception;
}
