// coupon.service.ts

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

  constructor(private http: HttpClient) { }

  getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.baseUrl}/allCoupons`);
  }

  createCoupon(coupon: Coupon): Observable<Coupon> {
    return this.http.post<Coupon>(`${this.baseUrl}/create`, coupon);
  }

  getCouponById(couponId: number): Observable<Coupon> {
    return this.http.get<Coupon>(`${this.baseUrl}/${couponId}`);
  }

  updateCoupon(couponId: number, updatedCoupon: Coupon): Observable<any> {
    console.log('Updating coupon:', updatedCoupon);
    return this.http.put<any>(`${this.baseUrl}/${couponId}`, updatedCoupon);
  }

  deleteCoupon(couponId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${couponId}`);
  }

}
