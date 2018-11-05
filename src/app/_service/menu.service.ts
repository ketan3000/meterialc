import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private _http: HttpClient) { }
  getmenu(): Observable<interfacemenu> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.get<interfacemenu>(appConfig.apiUrl + "menu",loginHeaders);
  }
}

export interface interfacemenu {
  status: boolean;
  data: string[];
}
