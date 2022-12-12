package com.lash.lashClone.service.mypage;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.account.UserUpdateReqDto;
import com.lash.lashClone.repository.account.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.lash.lashClone.service.auth.PrincipalDetails;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    //--------------유저 정보 수정----------------
    @Override
    public boolean updateUser(UserUpdateReqDto userUpdateReqDto, PrincipalDetails principalDetails) throws Exception {
        System.out.println(principalDetails.getMember().getMember_id());
        return userRepository.updateUser(userUpdateReqDto.toUserEntity(principalDetails)) > 0;
    }
    //-----------유저 정보------------------
    @Override
    public Member getUser(String username) throws Exception {
        System.out.println(username);
        return userRepository.getUser(username);
    }
    //-------------유저 정보 삭제---------------
    @Override
    public boolean deleteUser(int memberId) throws Exception {
        return userRepository.deleteUser(memberId) > 0;
    }



}
