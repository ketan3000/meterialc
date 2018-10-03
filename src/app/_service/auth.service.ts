import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = 'http://localhost/angularapi/auth/'; 
  companyCount:string ='false';
  constructor(private _http: HttpClient) { }

  signup(fromdata): Observable<iflogin> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.post<iflogin>(this.base_url + "signup", fromdata,loginHeaders);
  }

  login(fromdata): Observable<iflogin> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.post<iflogin>(this.base_url + "login", fromdata,loginHeaders);
  }

  isValidTokenPage(){
    return this._http.get<iflogin>(this.base_url + "isvalidPage").subscribe(
      myvalue => {
        localStorage.setItem('token',myvalue.token);
      }
    );
  }



  getDashboardRecord() {
    return this._http.get<iflogin>(this.base_url + "dashboard");    
  }

  isValidToken(){
    return this._http.get<iflogin>(this.base_url + "dashboard").subscribe(
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
