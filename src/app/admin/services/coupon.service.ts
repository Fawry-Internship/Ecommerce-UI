import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  url = "http://localhost:9090/coupon/allCoupons";

  constructor(private http:HttpClient) { }
  
  getAllCoupons(){
    return this.http.get(this.url);
  }

}
