package edu.icet.controller;

import edu.icet.dto.Admin;
import edu.icet.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    @Autowired(required = true)
    AdminService adminService;
    @PostMapping
    public void saveAdmin(@RequestBody Admin admin){
        adminService.saveAdmin(admin);
    }

}
