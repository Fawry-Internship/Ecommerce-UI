import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Order} from "../../../shared/models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:7071/order';

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/create`, order);
  }
}
