import { Injectable } from '@angular/core';
import {getToken, productHost, storeHost} from "../../shared/environments/environments";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {Product} from "../../shared/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = productHost();
  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.get<any>(`${this.baseUrl}`, {headers});
  }

  deleteProduct(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers, observe: 'response' }).pipe(
      catchError(error => {
        if (error.status === 202) {
          console.log('Product added successfully');
          return of('success');
        } else {
          return throwError(error);
        }
      })
    );
  }


  addProduct(newProduct: Product): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.post<any>(`${this.baseUrl}`, newProduct, { headers }).pipe(
      catchError(error => {
        if (error.status === 201) {
          console.log('Product added successfully');
          return of('success');
        } else {
          return throwError(error);
        }
      })
    );
  }

  updateProduct(id: number, updatedProduct: Product): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.put<any>(`${this.baseUrl}/${id}`, updatedProduct, { headers }).pipe(
      catchError(error => {
        if (error.status === 200) {
          console.log('Product updated successfully');
          return of('success');
        } else {
          return throwError(error);
        }
      })
    );
  }

}
