import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../../services/coupon.service';
import { Coupon } from 'src/app/shared/models/coupon';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit {

  headerList = ["id","code","discountType","discountValue","validFrom","validTo","usageLimit","remainingCount","createdAt"];
  coupons !:Coupon[];

  constructor(private couponService:CouponService){}

  ngOnInit(): void {
    this.getAllCoupons();
  }

  getAllCoupons(){
    this.couponService.getAllCoupons().subscribe(data => {
      this.coupons = data;
    })
  }

  editCoupon(event:any){
    console.log(event);
  }

  deleteCoupon(event:any){
    console.log(event);
  }

}
