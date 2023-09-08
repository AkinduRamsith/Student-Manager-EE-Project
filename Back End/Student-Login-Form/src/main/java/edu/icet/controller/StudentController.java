package edu.icet.controller;

import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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
    public boolean saveStudent(@ModelAttribute Student student,@RequestPart("file") MultipartFile file) throws IOException {
        return studentService.saveStudent(student,file);
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

    @DeleteMapping("/{id}")
    public boolean deleteStudent(@PathVariable String id){
        return studentService.deleteStudent(Long.valueOf(id));
    }

    @PutMapping
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }

    @GetMapping("/search/{name}")
    public List<Student> getStudentByFirstNameAndLastName(@PathVariable String name){
        return studentService.getStudentByFirstNameAndLastName(name);
    }


}
