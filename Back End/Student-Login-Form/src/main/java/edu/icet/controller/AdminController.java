package edu.icet.controller;

import edu.icet.dto.Admin;
import edu.icet.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;
    @PostMapping
    public void saveAdmin(@RequestBody Admin admin){
        adminService.saveAdmin(admin);
    }

    @GetMapping("/{adminName}/{adminPassword}")
    public boolean getAdminByUserName(@PathVariable String adminName,@PathVariable String adminPassword){
        return adminService.getAdminByUserName(adminName,adminPassword);
    }

}
