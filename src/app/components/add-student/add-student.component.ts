import { Student } from 'src/app/interface/sttudent';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Output() addStudents =new EventEmitter<Student>()

  name=''
  gender=''
  amount_balance=0

  validate=false

  addStudent(){
    // if(this.name ===''|| this.gender===''){
    //   alert('fill all the fields')
    // }

    if(this.name==='' || this.gender===''){

      this.validate=true
      setTimeout(() => {
        this.validate=false
        
      }, 2000);
    }
    else{
      this.addStudents.emit({
        name:this.name,
        gender:this.gender,
        amount_balance:this.amount_balance
      })
    }

    this.name=''
    this.gender=''
    this.amount_balance=0

  }

  constructor() { }

  ngOnInit(): void {
  }

}
