import { Component, OnInit } from '@angular/core';
import { RegisterServerService } from '../../services/register-server.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  constructor(private registerServer:RegisterServerService) { }

  ngOnInit(): void {
  }

  registrationValidtor(event:any)
  {
    console.log(event)
    this.registerServer.registerUser(event).subscribe((res)=>
    {
      alert(res)
    },(err)=>
    {
      alert('Server Issues,Try after some time')
    })
  }
}
