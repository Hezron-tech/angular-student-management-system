import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  
 

  constructor(){}

 

  isLoggedin(){
    return !!localStorage.getItem('token')
  }

  // login(){
  //   this.isLoggedin=true
  
  // }
  
  logout(){
    localStorage.clear()
  }
  
  // isauthenticated(){
  //   const promise = new Promise<boolean>((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve(this.isLoggedin)
  //     },500)
  //   })
  //   return promise
  // }
}


