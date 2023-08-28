package edu.icet.service;

import edu.icet.dao.AdminEntity;
import edu.icet.dto.Admin;
import edu.icet.repository.AdminRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImplV1 implements AdminService{
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    ModelMapper modelMapper;
    @Override
    public void saveAdmin(Admin admin) {
        boolean ad = validateAdmin(admin);
        if(ad){
            AdminEntity adminEntity=modelMapper.map(admin,AdminEntity.class);
            adminRepository.save(adminEntity);
        }


    }

    private boolean validateAdmin(Admin admin){
        if(admin.getAdminName()==null || admin.getAdminEmail()==null || admin.getAdminPassword()==null){
            System.out.println("Hellow");
            return false;
        }
        return true;
    }
}
