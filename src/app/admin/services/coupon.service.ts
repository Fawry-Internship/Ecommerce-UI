import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { couponHost } from 'src/app/shared/environments/environments';
import { Observable } from 'rxjs';
import { Coupon } from 'src/app/shared/models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private baseUrl = couponHost();

  constructor(private http:HttpClient) { }

  getAllCoupons() : Observable<Coupon[]>{
    return this.http.get<Coupon[]>(`${this.baseUrl}/allCoupons`);
  }

 createCoupon(coupon: Coupon) : Observable<Coupon>{
    return this.http.post<Coupon>(`${this.baseUrl}/create`, coupon);
  }

}
