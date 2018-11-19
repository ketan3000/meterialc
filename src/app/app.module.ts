import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { AuthGuard } from './authguard/auth.guard';
import { AuthInterceptor } from './_service/auth-interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,IndexComponent,HomeComponent,NoPageComponent
  ],
  imports: [
    HomeModule,IndexModule,
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(routes), BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [AuthGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
