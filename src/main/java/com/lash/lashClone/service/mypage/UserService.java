package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.UserUpdateReqDto;
import com.lash.lashClone.service.auth.PrincipalDetails;


public interface UserService {
//    //유저 정보 수정
    public boolean updateUser(UserUpdateReqDto userUpdateReqDto, PrincipalDetails principalDetails) throws Exception;

    //유저 정보 찾기
    public Member getUser(String username) throws Exception;
    
    // 유저 정보 삭제
    public boolean deleteUser(int memberId) throws Exception;

    //-----------유저 정보------------------
}
