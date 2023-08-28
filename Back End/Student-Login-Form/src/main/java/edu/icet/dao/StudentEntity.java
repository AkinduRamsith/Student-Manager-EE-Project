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
    private String age;
    private String phoneNumber;
    private String email;
    private String address;
    private String institute;
    private String batch;
    private String gender;
    private String userName;
    private String password;

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
