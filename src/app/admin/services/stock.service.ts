import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Stock } from 'src/app/shared/models/stock';
import { StockConsumption } from 'src/app/shared/models/stockConsumption';

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

  deleteStock(stockId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${stockId}`);
  }

  getStockById(stockId: number): Observable<Stock> {
    return this.http.get<Stock>(`${this.baseUrl}/${stockId}`).pipe(
      tap((response: Stock) => {
        console.log(`Get Stock by ID ${stockId} Response:`, response);
      })
    );
  }

  getStockConsumptionHistories(stockId: number):Observable<any>{
    return this.http.get<[StockConsumption]>(`${this.baseUrl}/consumption-history/${stockId}`);
  }
}
