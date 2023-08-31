package edu.icet.service;

import edu.icet.dto.Student;

import java.util.List;

public interface StudentService {
public void saveStudent(Student student);

//    boolean getStudentByUserName(String userName,String password);

    List<Student> getStudents();

    boolean deleteStudent(Long id);

    void updateStudent(Student student);
}
