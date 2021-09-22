import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(user:any){
  return this.Http.post<any>("http://localhost:3000/login",user)
  
 
  
}
  constructor(private Http:HttpClient) { }
  loggedin(){
    return !!localStorage.getItem('token')
    
  }
  getToken(){
  return  localStorage.getItem('token')
  }
}
