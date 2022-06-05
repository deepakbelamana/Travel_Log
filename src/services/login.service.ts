import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterServerService } from './register-server.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private registerService:RegisterServerService) { 
  
  }
  loginValidator(loginData:any)
  {
    return this.http.post(this.registerService.baseUrl+'login',loginData)
  }
}
