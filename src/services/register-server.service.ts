import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServerService {

  baseUrl='http://127.0.0.1:5000/app/'

  constructor(private http:HttpClient) { }

  registerUser(userData:any)
  {
      return this.http.post(this.baseUrl+'register',JSON.stringify(userData))
  }
}
