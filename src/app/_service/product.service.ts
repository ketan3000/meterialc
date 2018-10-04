import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})



export class ProductService {


  apikey = '6yyikIHvIj14wrHoiACFLFOqmeRIxH5AqBw';
  constructor(private _http: HttpClient) { }
  getAllCategories(page: number):Observable<interfaceProductCat> {
    let loginHeaders = {
      headers: new HttpHeaders({
        'No-Auth': 'True'
      })
    }
    return this._http.get<interfaceProductCat>(appConfig.price_api +'list/categories' + '?page=' + page + '&api_key=' + appConfig.apikey);
  }


}

export interface interfaceProductCat {
  current_page: number,
  data: string[],
  total: number
}


