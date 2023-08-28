package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Admin {
    private Long adminId;
    private String adminName;
    private String adminEmail;
    private String adminPassword;

    public void setAdminName(String adminName){
        if(adminName.isBlank())return;
        this.adminName=adminName;
    }

    public void setAdminEmail(String adminEmail){
        if(adminEmail.isBlank())return;
        this.adminEmail=adminEmail;
    }

    public void setAdminPassword(String adminPassword){
        if(adminPassword.isBlank())return;
        this.adminPassword=adminPassword;
    }
}
