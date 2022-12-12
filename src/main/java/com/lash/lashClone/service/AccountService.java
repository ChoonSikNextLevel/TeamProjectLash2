package com.lash.lashClone.service;

import com.lash.lashClone.dto.account.RegisterReqDto;

public interface AccountService {
    public boolean checkDuplicateEmail(String email);

    public boolean join(RegisterReqDto registerReqDto) throws Exception;

}
