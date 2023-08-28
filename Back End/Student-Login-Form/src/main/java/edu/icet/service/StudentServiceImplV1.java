package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;

import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
@Transactional
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

    @Override
    public boolean getStudentByUserName(String userName, String password) {
        return studentRepository.findByUserNameAndPassword(userName, password) != null ? true : false;
    }
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
                    .age(entity.getAge())
                    .phoneNumber(entity.getPhoneNumber())
                    .email(entity.getEmail())
                    .address(entity.getAddress())
                    .institute(entity.getInstitute())
                    .batch(entity.getBatch())
                    .gender(entity.getGender())
                    .build());
        }
        return studentModel;
    }

    @Override
    public boolean deleteStudent(Long id) {
          studentRepository.deleteById(id);
          return findById(id);
    }

    @Override
    public void updateStudent(Student student){
        boolean stu = validateStudent(student);
        if (stu) {
            StudentEntity map = modelMapper.map(student,StudentEntity.class);
            studentRepository.save(map);
        }
    }

    private boolean findById(Long id){
        return studentRepository.findById(id)!=null ? true : false;
    }
    private boolean validateStudent(Student student) {
        if (student.getAge() == null || student.getAge().isBlank() || student.getFirstName() == null || student.getFirstName().isBlank() || student.getPhoneNumber() == null || student.getPhoneNumber().isBlank() || student.getEmail() == null || student.getEmail().isBlank() || student.getAddress() == null || student.getAddress().isBlank() || student.getLastName() == null || student.getLastName().isBlank() || student.getBatch() == null || student.getBatch().isBlank() || student.getInstitute() == null || student.getInstitute().isBlank() || student.getGender() == null || student.getGender().isBlank() || student.getUserName() == null || student.getUserName().isBlank() || student.getPassword() == null || student.getPassword().isBlank()) {
            System.out.println("Hello");
            return false;
        }
        return true;
    }
}
