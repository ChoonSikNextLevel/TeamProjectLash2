package com.lash.lashClone.repository.account;

import com.lash.lashClone.domain.Member;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface MyPageRepository {
    public Member memberList(String username) throws Exception;

}
