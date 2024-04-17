import { Injectable } from '@angular/core';
import { storeHost } from 'src/app/shared/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from 'src/app/shared/models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private baseUrl = storeHost()+"/store";

  constructor(private http:HttpClient) { }

  getAllStore() : Observable<Store[]>{
    return this.http.get<Store[]>(`${this.baseUrl}/getAll`);
  }

 createStore(store: Store) : Observable<Store>{
    return this.http.post<Store>(`${this.baseUrl}/create`, store);
  }

  deleteStoreById(storeId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${storeId}`);
  }

  updateStore(storeId: number, store: Store): Observable<Store> {
    return this.http.put<Store>(`${this.baseUrl}/update/${storeId}`, store);
  }
  getById(storeId: number): Observable<Store> {
    return this.http.get<Store>(`${this.baseUrl}/get/${storeId}`);
  }
}
