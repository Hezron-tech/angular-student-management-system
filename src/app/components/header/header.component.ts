import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  prom= new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Welcome to TheJitu School')
    },3000)
  })

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/'])
  }
getStyle(){
  return 'display '
}
logout(){
  this.authService.logout()
  this.router.navigate([''])
}

}
