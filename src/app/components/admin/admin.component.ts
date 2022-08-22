import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Student } from 'src/app/interface/sttudent';
import { Router } from '@angular/router';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() student!:Student[]

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {

    this.student= this.studentService.getStudent()
  }
  allStudents(){
    
this.router.navigate(["admin/students"])
  }
Students(){
this.router.navigate(["admin/balance"])
}
balance(){
  this.router.navigate(["admin/nobalance"])

}
}
