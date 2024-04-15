import { Injectable } from '@angular/core';
import { Stock } from "../../shared/models/stock";
import {Observable, tap} from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:8082/stock';

  constructor(private http: HttpClient) { }

  addStock(storeId: number, stockRequestDTO: any): Observable<Stock> {
    return this.http.post<Stock>(`${this.baseUrl}/add/${storeId}`, stockRequestDTO).pipe(
      tap((response: Stock) => {
        console.log('Add Stock Response:', response);
      })
    );
  }

  updateStock(stockId: number, stockRequestDTO: any): Observable<Stock> {
    return this.http.put<Stock>(`${this.baseUrl}/update/${stockId}`, stockRequestDTO).pipe(
      tap((response: Stock) => {
        console.log('Update Stock Response:', response);
      })
    );
  }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/getAll`).pipe(
      tap((response: Stock[]) => {
        console.log('Get All Stocks Response:', response);
      })
    );
  }
}
