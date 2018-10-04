import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  companyCount:string ='false';
  constructor(private _http: HttpClient) { }

  signup(fromdata): Observable<iflogin> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.post<iflogin>(appConfig.apiUrl + "signup", fromdata,loginHeaders);
  }

  login(fromdata): Observable<iflogin> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.post<iflogin>(appConfig.apiUrl + "login", fromdata,loginHeaders);
  }

  isValidTokenPage(){
    return this._http.get<iflogin>(appConfig.apiUrl + "isvalidPage").subscribe(
      myvalue => {
        localStorage.setItem('token',myvalue.token);
      }
    );
  }



  getDashboardRecord() {
    return this._http.get<iflogin>(appConfig.apiUrl + "dashboard");    
  }

  isValidToken(){
    return this._http.get<iflogin>(appConfig.apiUrl + "dashboard").subscribe(
      rset => this.companyCount = rset.status
    );
  }

  
  getTokenValue(){
    return this.companyCount;
  }

}


export interface iflogin {
  status: string,
  token: string
}
