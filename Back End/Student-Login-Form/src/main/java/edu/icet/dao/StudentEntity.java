package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "student")
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String nic;
    private String phoneNumber;
    private String age;
    private String email;
    private String streetAddress;
    private String province;
    private String district;
    private String gender;
    private String courseType;
    private String course;
    private String schoolName;
    private String schoolYear;
    private String stream;
    private String motherName;
    private String motherPhoneNumber;
    private String fatherName;
    private String fatherPhoneNumber;

//    public void setFirstName(String firstName){
//        if(firstName.isBlank())return;
//        this.firstName=firstName;
//    }
//    public void setLastName(String lastName){
//        if(lastName.isBlank())return;
//        this.lastName=lastName;
//    }
//    public void setAge(String age){
//        if (age != null && !age.isBlank() && Integer.parseInt(age) >= 10) {
//            this.age = age;
//        }
//    }
//
//    public void setPhoneNumber(String phoneNumber) {
//        if (phoneNumber == null) {
//            this.phoneNumber = null;
//            return;
//        }
//        if (phoneNumber.length() == 10 && phoneNumber.startsWith("0")) {
//            this.phoneNumber = phoneNumber;
//        } else {
//            this.phoneNumber = null;
//        }
//    }
//    public void setEmail(String email){
//        if(email.isBlank())return;
//        this.email=email;
//    }
//
//    public void setAddress(String address){
//        if(address.isBlank())return;
//        this.address=address;
//    }
//
//    public void setInstitute(String institute){
//        if(institute.isBlank())return;
//        this.institute=institute;
//    }
//
//    public void setBatch(String batch){
//        if(batch.isBlank())return;
//        this.batch=batch;
//    }
//
//    public void setGender(String gender) {
//        if (gender == null || gender.isBlank()) {
//            return;
//        }
//        this.gender = gender;
//    }
//    public void setUserName(String userName){
//        if(userName==null || userName.isBlank()){
//            return;
//        }
//        this.userName=userName;
//    }
//    public void setPassword(String password){
//        if(password==null || password.isBlank() ){
//            return;
//        }
//        this.password=password;
//    }


}
