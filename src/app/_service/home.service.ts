import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { appConfig } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http: HttpClient) { }
  

  getLatestData() {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    let mobile = this._http.get<interfaceProductCat>(appConfig.price_api + 'search' + '?page=1&product=mobile&api_key=' + appConfig.apikey,loginHeaders);
    let leaptop = this._http.get<interfaceProductCat>(appConfig.price_api + 'search' + '?page=1&product=laptops&api_key=' + appConfig.apikey,loginHeaders);
   
    return forkJoin<interfaceProductCat>([mobile, leaptop]);
  }
}

export interface interfaceProductCat {  
  data: string[];
}