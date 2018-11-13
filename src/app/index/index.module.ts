import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms'
import { NgxLoadingModule } from 'ngx-loading';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from './index.router';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { DetailsComponent } from './details/details.component';
@NgModule({
  imports: [
    CommonModule,Ng2PaginationModule,
    FormsModule,NgxLoadingModule.forRoot({}), RouterModule.forChild(IndexRoutes)
  ],
  declarations: [LoginComponent, SignupComponent, ForgotComponent, LandingComponent,ProductsComponent, DetailsComponent],
  exports: [RouterModule],
  
})
export class IndexModule { }
