package com.lash.lashClone.config;


//import com.lash.lashClone.handler.auth.AuthFailureHandler;
import com.lash.lashClone.handler.auth.AuthFailureHandler;
import com.lash.lashClone.service.auth.PrincipalOauth2Service;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity     // 기존 security를무시하고 이 것 사용하하겠다
@Configuration         //security 기본설정
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final PrincipalOauth2Service principalOauth2Service;
    @Bean
    public BCryptPasswordEncoder passwordEnoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {   // 기본 설정

        http.csrf().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
                /*<<<<<<<<<<<<<<<<<< Page >>>>>>>>>>>>>>>>*/
                .antMatchers("/admin/**")
                .access("hasRole('ADMIN') or hasRole('MANAGER')")


                .antMatchers("/", "/index", "/product_all/**")
                .permitAll()
                .antMatchers("/account/login", "/account/join")
                .permitAll()

                /*<<<<<<<<<<<<<<<<<< Resource >>>>>>>>>>>>>>>>*/
                .antMatchers("/static/**")
                .permitAll() //모두 접근 권한을 허용해라.

                /*<<<<<<<<<<<<<<<<<< API >>>>>>>>>>>>>>>>*/
                .antMatchers("/api/account/join", "/api/product_all/**")
                .permitAll()
                .antMatchers("/account/mypage") // 우리가 지정한 요청
                .authenticated()
                .anyRequest() //antMatchers 외에 다른 모든 요청들은
                .permitAll()

//                .denyAll() //모든 접근을 차단해라.

                .and()
                .formLogin() //폼로그인 방식으로 인증을 해라
                .loginPage("/account/login") //우리가 만든 로그인 페이지를 사용해라. GET 요청
                .loginProcessingUrl("/account/login")   // 로그인 로직(PrincipalDetailsService) POST 요청
                .failureHandler(new AuthFailureHandler())
                .defaultSuccessUrl("/index")
                .and()

                .oauth2Login()
                .userInfoEndpoint()
                /*
                 * 1. google, naver, kakao 로그인 요청 -> 코드를 발급(토큰)
                 * 2. 발급받은 코드로 에세스토큰을 발급요청 -> 에세스토큰 발급
                 * 3. 발급받은 에세스토큰으로 스코프에 등록된 프로필 정보를 요청할 수 있게된다.
                 * 4. 해당 정보를 response또는 Attributes로 전달 받음
                 */
                .userService(principalOauth2Service)
                .and()
                .defaultSuccessUrl("/index");



    }

}
//                .antMatchers("/account/login" ,"/account/join")
//                .permitAll()
//
//                .antMatchers("/api/account/join","/api/account/join")
//                .permitAll()
//
//                .and()
//
//                .formLogin()//Form 로그인 인증 기능이 작동함
//                .loginPage("/account/login")//사용자 정의 로그인 페이지
//                .defaultSuccessUrl("/index")//로그인 성공 후 이동 페이지
//                .failureUrl("/account/login")// 로그인 실패 후 이동 페이지
//                .usernameParameter("email")//아이디 파라미터명 설정
////                .passwordParameter("")//패스워드 파라미터명 설정
//                .loginProcessingUrl("/account/login")//로그인 Form Action Url
////                .successHandler(loginSuccessHandler())//로그인 성공 후 핸들러 (해당 핸들러를 생성하여 핸들링 해준다.)
////                .failureHandler(loginFailureHandler())//로그인 실패 후 핸들러 (해당 핸들러를 생성하여 핸들링 해준다.)
//                .permitAll(); //사용자 정의 로그인 페이지 접근 권한 승인

