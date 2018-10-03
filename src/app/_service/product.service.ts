import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ProductService {


  apikey = 'ykvhoXHTsJLtsb8KBXI079v4y0BVQv6tXQb';
  constructor(private _http: HttpClient) { }
  getAllCategories(pageURL:string) {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.get(pageURL + '&api_key=' + this.apikey);
  }


}
