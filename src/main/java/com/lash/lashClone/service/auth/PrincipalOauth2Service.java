package com.lash.lashClone.service.auth;

import com.lash.lashClone.domain.Member;
import com.lash.lashClone.repository.account.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2AuthorizationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalOauth2Service extends DefaultOAuth2UserService {

    private final AccountRepository accountRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        String priovider = userRequest.getClientRegistration().getClientName();
        OAuth2User oAuth2User = super.loadUser(userRequest);

        log.info("userRequest >>> {}", userRequest);
        log.info("getClientRegistration >>> {}", userRequest.getClientRegistration());
        log.info("getAttributes >>> {}", oAuth2User.getAttributes());

        Member member = getOauth2User(priovider, oAuth2User.getAttributes());

        return new PrincipalDetails(member, oAuth2User.getAttributes());

    }
    private Member getOauth2User(String provider, Map<String, Object> attributes) {
        String oauth2_id =null;
        String id = null;
        String email = null;
        String phone = null;


        Member member = null;

        Map<String, Object> response = null;

        if(provider.equalsIgnoreCase("KaKao")) {
            id = Long.toString((Long) attributes.get("id"));
            response = new HashMap<String, Object>();
            Map<String, Object>kakao_account = (Map<String, Object>) attributes.get("kakao_account");
            response.put("email", kakao_account.get("email"));
            Map<String, Object>properties = (Map<String, Object>) attributes.get("properties");
            response.put("name", properties.get("nickname"));
        }else if(provider.equalsIgnoreCase("naver")) {
            response = (Map<String, Object>) attributes.get("response");
            id = (String) response.get("id");
        }if(provider.equalsIgnoreCase("facebook")) {
            response = attributes;
            id = (String)response.get("id");
        }

        oauth2_id = provider + "_" + id;
        member = accountRepository.findUserByUsername(oauth2_id);
        if(member == null) {
            member = member.builder()
                    .username(oauth2_id)
                    .oauth_username(oauth2_id)
                    .password(new BCryptPasswordEncoder().encode(UUID.randomUUID().toString().replaceAll("-", "")))
                    .name((String) response.get("name"))
                    .email((String) response.get("email"))
                    .phone(phone)
                    .role_id(1)
                    .provider(provider)
                    .build();

            accountRepository.save(member);

        }
//        else if(member.getOauth_username()== null) {
//            member.setOauth_username(oauth2_id);
//            member.setProvider(provider);
//            accountRepository.updateMemberOauth2(member);
//        }

        return member;

    }

}
