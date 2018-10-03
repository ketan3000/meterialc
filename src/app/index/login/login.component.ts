import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private _route:Router) { }

  ngOnInit() {
  }

  signIn(formData){    
    this.authservice.login(formData.value)
    .subscribe(myvalue =>{
      if(myvalue.status)
      {
        localStorage.setItem('token',myvalue.token);
        this._route.navigate(['/home']);
      }     
    });
  }

}

