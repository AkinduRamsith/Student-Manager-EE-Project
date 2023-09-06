package edu.icet.service;

import edu.icet.dto.Student;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudentService {
public void saveStudent(Student student, MultipartFile file) throws IOException;

//    boolean getStudentByUserName(String userName,String password);

    List<Student> getStudents();

    boolean deleteStudent(Long id);

    void updateStudent(Student student);

    Student getStudentById(Long id);
}
