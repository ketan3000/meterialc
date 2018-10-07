import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
///https://www.npmjs.com/package/ngx-toastr/v/6.0.0
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private _route: Router, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  signIn(formData) {

    this.authservice.login(formData.value)
      .subscribe(myvalue => {
        console.log(myvalue);
        if (myvalue.status) {
          localStorage.setItem('token', myvalue.token);
          this.toastrService.success('logged in successfully');
          this._route.navigate(['/home']);
        } else {
          this.toastrService.error(myvalue.message);
        }
      },
        (err) => {
          this.toastrService.error(err.statusText);
          console.log(err)
          console.log(err.statusText)
        }
      );
  }

 

}

