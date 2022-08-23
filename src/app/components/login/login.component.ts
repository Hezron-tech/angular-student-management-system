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



  constructor(public authService:AuthService) { 
    localStorage.setItem("email",'admin@gmail.com')
    localStorage.setItem("password",'1234')
    
  }

  ngOnInit(): void {
  }

validate=false
// error=false

onLogin(){

  let email=localStorage.getItem("email")
  let password=localStorage.getItem("password")


  if(this.email!==email || this.password!==password){

    this.validate=true
    setTimeout(() => {
      this.validate=false
      
    }, 2000);
  }

  // if(this.email==='' || this.password===''){

  //   this.error=true
  //   setTimeout(() => {
  //     this.error=false
  //     this.validate=false
      
  //   }, 2000);
  // }
  else{
    this.email=''
    this.password=''

    let token=localStorage.setItem("token","qwertyuiopoasdfghjkasdfghjkwerthjsdfghjdfghj");
    location.href='admin'
  }
}

}

