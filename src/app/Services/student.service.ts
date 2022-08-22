
import { Injectable } from '@angular/core';
import { Student } from '../interface/sttudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudent():Student[]{
    return[
      {
        name:"Hezron",
        gender:'Male',
        amount_balance:2000

      },
      {
        name:"Talya",
        gender:'Female',
        amount_balance:0

      },
      {
        name:"Mwangi",
        gender:'Male',
        amount_balance:20000

      },
      {
        name:"Tania",
        gender:'Female',
        amount_balance:0

      },
      {
        name:"Tzuriel",
        gender:'Male',
        amount_balance:0

      }
    ]
  }}



