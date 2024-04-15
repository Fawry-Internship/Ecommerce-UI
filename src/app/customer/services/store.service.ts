import { Injectable } from '@angular/core';
import {getToken, productHost, storeHost} from "../../shared/environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storeUrl = storeHost();
  constructor(private http: HttpClient) { }

  getAllStocksProducts() : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.get<any>(`${this.storeUrl}/stock/products`, {headers});
  }

}
