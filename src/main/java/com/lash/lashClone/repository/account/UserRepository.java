package com.lash.lashClone.repository.account;


import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.UserUpdateReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserRepository {

    public Member getUser(String username) throws Exception;

    public int updateUser(Member member) throws Exception;

    public int deleteUser(int memberId) throws Exception;
}
