import { Student } from './../../interface/sttudent';
import { StudentService } from './../../Services/student.service';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() student!:Student[]

  filter=''

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.student=this.studentService.getStudent()
  }

  addStudent(student:Student){

    this.student.push(student)

  }

}
