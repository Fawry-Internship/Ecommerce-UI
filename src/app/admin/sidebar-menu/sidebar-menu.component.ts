import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CouponService } from './../services/coupon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {

  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    // this.http.get('http://localhost:9090/coupon/allCoupons').subscribe((result : any) => {
    //   this.coupons = result;
    // });
  }


}
