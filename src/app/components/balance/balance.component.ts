import { Student } from './../../interface/sttudent';
import { Component, OnInit,Input } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  @Input() student!:Student[]
  filter=''

  constructor(private studentService:StudentService ) { }

  ngOnInit(): void {

    this.student=this.studentService.getStudent().filter(b=> b.amount_balance>0)

}}
