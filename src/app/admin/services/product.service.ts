import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import {Observable, of, throwError} from "rxjs";
import { Product } from 'src/app/shared/models/product';
import { getToken, productHost } from 'src/app/shared/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = productHost();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.get<any>(`${this.baseUrl}`, { headers });
  }

  getProductById(productId: number): Observable<Product> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.get<Product>(`${this.baseUrl}/${productId}`, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.delete(`${this.baseUrl}/${id}`, { headers, observe: 'response' }).pipe(
      catchError(error => {
        if (error.status === 202) {
          console.log('Product deleted successfully');
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

  updateProduct(updatedProduct: Product): Observable<string> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.put<string>(`${this.baseUrl}`, updatedProduct, { headers }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
