import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/interface/sttudent';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-nobalance',
  templateUrl: './nobalance.component.html',
  styleUrls: ['./nobalance.component.css']
})
export class NobalanceComponent implements OnInit {

  @Input() student!:Student[]
  filter=''

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.student=this.studentService.getStudent().filter(b=> b.amount_balance==0)
  }

}
