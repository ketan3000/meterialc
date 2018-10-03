import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onFormSubmit(formData){
    
    this.authservice.signup(formData.value)
    .subscribe(myvalue =>{
            
    });
  }


}
