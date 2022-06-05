import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServer:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  isUserLogin:any
  loginValidator(event:any)
  {
    this.loginServer.loginValidator(event).subscribe((login_response)=>
    {
      this.isUserLogin=login_response
      console.log(login_response)
      if(this.isUserLogin.result==true && this.isUserLogin.password==false)
      {
          alert('password Was incorrect')
      }
      if(this.isUserLogin.register==false)
      {
        alert('You have not registered..sign up first')
      }
      if(this.isUserLogin.result==true && this.isUserLogin.password==true)
      {
        alert('Login Successfull')
        this.router.navigate(['/home'])
      }
    })
  }

}
