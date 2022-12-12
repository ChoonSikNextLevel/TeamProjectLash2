package com.lash.lashClone.dto.account;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.domain.User;
import lombok.Data;
import org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchProperties;
import com.lash.lashClone.service.auth.PrincipalDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Data
public class UserUpdateReqDto {
    private int memberId;
    private String password;
    private String firstPhone;
    private String lastPhone;
    private String email;

    public Member toUserEntity(PrincipalDetails principalDetails) {
        return Member.builder()
                .member_id(principalDetails.getMember().getMember_id())
                .password(password.equals(principalDetails.getMember().getPassword()) ? null : new BCryptPasswordEncoder().encode(password))
                .phone(("010" + firstPhone + lastPhone).equals(principalDetails.getMember().getPhone()) ? null : ("010" + firstPhone + lastPhone))
                .email(email.equals(principalDetails.getMember().getEmail()) ? null : email)
                .build();
    }
}
