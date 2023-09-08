package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "student")
@Builder
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
    private String imageName;
    private String imagePath;





}
