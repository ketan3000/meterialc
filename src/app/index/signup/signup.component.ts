import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _route: Router,private authservice:AuthService ,private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onFormSubmit(formData){
    
    this.authservice.signup(formData.value)
    .subscribe(myvalue =>{
      if(myvalue.status){
        this.toastrService.success(myvalue.message);
        this._route.navigate(['/login']); 
      }else{
        this.toastrService.error(myvalue.message);
      }
        
    });
  }


}
