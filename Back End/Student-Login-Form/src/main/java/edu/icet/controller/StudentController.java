package edu.icet.controller;

import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping
    public void saveStudent(@RequestBody Student student) {
        studentService.saveStudent(student);
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable String id){
        Student studentById = studentService.getStudentById(Long.valueOf(id));
        log.debug(String.valueOf(studentById));
        return studentById;
    }
    @GetMapping
    public List<Student> getStudents(){
        return studentService.getStudents();
    }
//    @GetMapping("/{userName}/{password}")
//    public boolean getStudentByUserName(@PathVariable String userName,@PathVariable String password){
//        return studentService.getStudentByUserName(userName,password);
//    }

    @DeleteMapping("/{id}")
    public boolean deleteStudent(@PathVariable String id){
        return studentService.deleteStudent(Long.valueOf(id));
    }

    @PutMapping
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }

}
