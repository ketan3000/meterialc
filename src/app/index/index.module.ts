import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms'
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,NgxLoadingModule.forRoot({})
  ],
  declarations: [LoginComponent, SignupComponent, ForgotComponent],
})
export class IndexModule { }
