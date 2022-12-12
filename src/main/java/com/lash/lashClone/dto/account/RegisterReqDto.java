package com.lash.lashClone.dto.account;


import com.lash.lashClone.domain.Member;
import com.lash.lashClone.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class RegisterReqDto {

    @NotBlank(message= "아이디를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class )
    private String username;

    @NotBlank(message= "비밀번호를 비워 둘 수 없습니다.", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=8, max=16, message = "비밀번호는 8~16자만 가능합니다.", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$",
                message = "비밀번호는 숫자, 영문, 특수기호를 하나 이상 포함하여 작성해야합니다",
                groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    @NotBlank(message= "이름을 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2,max=3, message = "이름은 2~3자만 가능합니다.", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([가-힇])*$", message = "이름은 한글만 가능합니다.",groups = ValidationGroups.PatternCheckGroup.class)
    private String name;

    @NotBlank(message= "중간 4자리를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2, max=4, message = "중간 번호는 4자리만 가능합니다.", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "중간 번호는 숫자만 가능합니다.",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String firstPhone;

    @NotBlank(message= "마지막 4자리를 비워 둘 수 없습니다.",groups = ValidationGroups.NotBlankGroup.class)
    @Size(min=2, max=4, message = "마지막 번호는 4자리만 가능합니다.", groups = ValidationGroups.SizeCheckGroup.class)
    @Pattern(regexp = "^([0-9])*$",
            message = "마지막 번호는 숫자만 가능합니다.",
            groups = ValidationGroups.PatternCheckGroup.class)
    private String lastPhone;

    @Email
    @NotBlank(message= "Email를 비워 둘 수 없습니다.")
    private String email;

    public Member toUserEntity() {
        return Member.builder()
                .username(username)
                .password(new BCryptPasswordEncoder().encode(password))
                .name(name)
                .phone("010" + firstPhone + lastPhone)
                .email(email)
                .role_id(1)
                .build();
    }


}
