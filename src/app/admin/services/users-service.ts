import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { getToken, usersHost } from 'src/app/shared/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = usersHost();
  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.get<any>(`${this.baseUrl}`, {headers});
  }

  activateUser(userId: number) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.put<any>(`${this.baseUrl}/activation/${userId}`, null, {headers});
  }

  deactivateUser(userId: number) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${getToken()}`);
    return this.http.put<any>(`${this.baseUrl}/deactivation/${userId}`, null, {headers});
  }
}
