package com.lash.lashClone.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Role {
    private int role_id;
    private String role;
    private String role_name;
}
