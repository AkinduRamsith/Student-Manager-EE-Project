package edu.icet.service;

import edu.icet.dto.Student;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudentService {
public boolean saveStudent(Student student, MultipartFile file) throws IOException;

    List<Student> getStudents();

    boolean deleteStudent(Long id);

    void updateStudent(Student student);

    Student getStudentById(Long id);

    List<Student> getStudentByFirstNameAndLastName(String name);
}
