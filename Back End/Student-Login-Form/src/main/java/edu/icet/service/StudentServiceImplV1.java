package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class StudentServiceImplV1 implements StudentService {
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveStudent(Student student) {
        boolean stu = validateStudent(student);
        if (stu) {
            StudentEntity map = modelMapper.map(student, StudentEntity.class);
            studentRepository.save(map);
        }

    }

//    @Override
//    public boolean getStudentByUserName(String userName, String password) {
//        return studentRepository.findByUserNameAndPassword(userName, password) != null ? true : false;
//    }

    @Override
    public List<Student> getStudents() {
        Iterable<StudentEntity> studentList = studentRepository.findAll();
        Iterator<StudentEntity> iterator = studentList.iterator();
        List<Student> studentModel = new ArrayList<>();
        while (iterator.hasNext()) {
            StudentEntity entity = iterator.next();
            studentModel.add(Student.builder()
                    .id(entity.getId())
                    .firstName(entity.getFirstName())
                    .lastName(entity.getLastName())
                    .nic(entity.getNic())
                    .phoneNumber(entity.getPhoneNumber())
                    .age(entity.getAge())
                    .email(entity.getEmail())
                    .streetAddress(entity.getStreetAddress())
                    .province(entity.getProvince())
                    .district(entity.getDistrict())
                    .gender(entity.getGender())
                    .courseType(entity.getCourseType())
                    .course(entity.getCourse())
                    .schoolName(entity.getSchoolName())
                    .schoolYear(entity.getSchoolYear())
                    .stream(entity.getStream())
                    .motherName(entity.getMotherName())
                    .motherPhoneNumber(entity.getMotherPhoneNumber())
                    .fatherName(entity.getFatherName())
                    .fatherPhoneNumber(entity.getFatherPhoneNumber())
                    .build());
        }
        return studentModel;
    }

    @Override
    public boolean deleteStudent(Long id) {
        studentRepository.deleteById(id);
        return findBySId(id);
    }

    @Override
    public void updateStudent(Student student) {
        boolean stu = validateStudent(student);
        if (stu) {
            StudentEntity map = modelMapper.map(student, StudentEntity.class);
            studentRepository.save(map);
        }
    }

    @Override
    public Student getStudentById(Long id) {
        Optional<StudentEntity> byId = studentRepository.findById(id);
        log.debug(String.valueOf(byId));
        return modelMapper.map(byId,Student.class);
    }

    private boolean findBySId(Long id) {
        return studentRepository.findById(id) != null ? true : false;
    }

    private boolean validateStudent(Student student) {
        if (student.getAge() == null || student.getAge().isBlank() || student.getFirstName() == null || student.getFirstName().isBlank() || student.getPhoneNumber() == null || student.getPhoneNumber().isBlank() || student.getEmail() == null || student.getEmail().isBlank() || student.getStreetAddress() == null || student.getStreetAddress().isBlank() || student.getLastName() == null || student.getLastName().isBlank() || student.getNic() == null || student.getNic().isBlank() || student.getProvince() == null || student.getProvince().isBlank() || student.getGender() == null || student.getGender().isBlank() || student.getDistrict() == null || student.getDistrict().isBlank() || student.getCourseType() == null || student.getCourseType().isBlank() || student.getCourse().isBlank() || student.getCourse() == null || student.getSchoolName().isBlank() || student.getSchoolName() == null || student.getSchoolYear().isBlank() || student.getSchoolYear() == null || student.getStream().isBlank() || student.getStream() == null || student.getMotherName().isBlank() || student.getMotherName() == null || student.getMotherPhoneNumber().isBlank() || student.getMotherPhoneNumber() == null || student.getFatherName().isBlank() || student.getFatherName() == null || student.getFatherPhoneNumber().isBlank() || student.getFatherPhoneNumber() == null) {
            System.out.println("Hello");
            return false;
        }
        return true;
    }
}
