package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Student {
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


    public void setFirstName(String firstName) {
        if (firstName.isBlank()) return;
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        if (lastName.isBlank()) return;
        this.lastName = lastName;
    }

    public void setAge(String age) {
        if (age != null && !age.isBlank() && Integer.parseInt(age) >= 10) {
            this.age = age;
        }
    }

    public void setNic(String nic) {
        this.nic = nic;
    }


    public void setPhoneNumber(String phoneNumber) {
        if (phoneNumber == null) {
            this.phoneNumber = null;
            return;
        }
        if (phoneNumber.length() == 10 && phoneNumber.startsWith("0")) {
            this.phoneNumber = phoneNumber;
        } else {
            this.phoneNumber = null;
        }
    }

    public void setEmail(String email) {
        if (email.isBlank()) return;
        this.email = email;
    }

    public void setStreetAddress(String streetAddress) {
        if (streetAddress.isBlank()) return;
        this.streetAddress = streetAddress;
    }

    public void setProvince(String province) {
        if (province.isBlank()) return;
        this.province = province;
    }

    public void setDistrict(String district) {
        if (district.isBlank()) return;
        this.district = district;
    }

    public void setGender(String gender) {
        if (gender == null || gender.isBlank()) {
            return;
        }
        this.gender = gender;
    }

    public void setCourseType(String courseType) {
        if (courseType == null || courseType.isBlank()) {
            return;
        }
        this.courseType = courseType;
    }

    public void setSchoolName(String schoolName) {
        if (schoolName == null || schoolName.isBlank()) {
            return;
        }
        this.schoolName = schoolName;
    }

    public void setSchoolYear(String schoolYear) {
        if (schoolYear == null || schoolYear.isBlank()) {
            return;
        }
        this.schoolYear = schoolYear;
    }

    public void setStream(String stream) {
        if (stream == null || stream.isBlank()) {
            return;
        }
        this.stream = stream;
    }

    public void setCourse(String course) {
        if (course == null || course.isBlank()) {
            return;
        }
        this.course = course;
    }

    public void setMotherName(String motherName) {
        if (motherName == null || motherName.isBlank()) {
            return;
        }
        this.motherName = motherName;
    }


    public void setMotherPhoneNumber(String motherPhoneNumber) {
        if (motherPhoneNumber == null) {
            this.motherPhoneNumber = null;
            return;
        }
        if (motherPhoneNumber.length() == 10 && motherPhoneNumber.startsWith("0")) {
            this.motherPhoneNumber = motherPhoneNumber;
        } else {
            this.motherPhoneNumber = null;
        }
    }

    public void setFatherName(String fatherName) {
        if (fatherName == null || fatherName.isBlank()) {
            return;
        }
        this.fatherName = fatherName;
    }


    public void setFatherPhoneNumber(String fatherPhoneNumber) {
        if (fatherPhoneNumber == null) {
            this.fatherPhoneNumber = null;
            return;
        }
        if (fatherPhoneNumber.length() == 10 && fatherPhoneNumber.startsWith("0")) {
            this.fatherPhoneNumber = fatherPhoneNumber;
        } else {
            this.fatherPhoneNumber = null;
        }
    }


}
