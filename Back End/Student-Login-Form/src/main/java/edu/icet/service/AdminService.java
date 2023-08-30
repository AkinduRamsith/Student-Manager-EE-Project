package edu.icet.service;

import edu.icet.dto.Admin;

public interface AdminService {
    void saveAdmin(Admin admin);

    boolean getAdminByUserName(String adminName, String adminPassword);
}
