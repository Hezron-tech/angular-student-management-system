import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=''
  password=''
  // token =''

  constructor(private authService:AuthService) { 
    localStorage.setItem("email",'admin@gmail.com')
    localStorage.setItem("password",'1234')
  }

  ngOnInit(): void {
  }

onLogin(){

  let email=localStorage.getItem("email")
  let password=localStorage.getItem("password")

  if(this.email!==email || this.password!==password){

    alert('Wrong details!')

  }
  



  else{
    this.email=''
    this.password=''

    let token=localStorage.setItem("token","qwertyuiopoasdfghjkasdfghjkwerthjsdfghjdfghj");
    location.href='admin'
  }
}

}

