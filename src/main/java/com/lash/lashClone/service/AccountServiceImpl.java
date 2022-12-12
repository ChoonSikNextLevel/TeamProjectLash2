package com.lash.lashClone.service;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.RegisterReqDto;
import com.lash.lashClone.exception.CustomValidationException;
import com.lash.lashClone.repository.account.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    public boolean checkDuplicateEmail(String username) {

        Member member = accountRepository.findUserByUsername(username);
        if(member != null) {
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("duplicateFlag", "이미 가입된 이메일입니다");
            throw new CustomValidationException("DuplicateEmail Error", errorMap);
        }

        return true;
    }

    @Override
    public boolean join(RegisterReqDto registerReqDto) throws Exception {
        Member userEntity = registerReqDto.toUserEntity();
        int result = accountRepository.save(userEntity);

        return result != 0;
    }
}
