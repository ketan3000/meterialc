import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  fbrand = "";
  constructor(private _http: HttpClient) { }
  getAllCategories(page: number): Observable<interfaceProductCat> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.get<interfaceProductCat>(appConfig.price_api + 'list/categories' + '?page=' + page + '&api_key=' + appConfig.apikey,loginHeaders);
  }


  getAllProducts(page: number, productname: string,brand:string): Observable<interfaceProductCat> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    if(brand){
      this.fbrand = '&filter=' + brand
    }
    return this._http.get<interfaceProductCat>(appConfig.price_api + 'search' + '?page=' + page + '&product=' + productname + '&api_key=' + appConfig.apikey + this.fbrand,loginHeaders);
  }


}

export interface interfaceProductCat {
  current_page: number;
  data: string[];
  total: number;
  meta: {
    items:number;
    filters:{
      
      brand:string[];
      category:string[];
    }
  };
}









