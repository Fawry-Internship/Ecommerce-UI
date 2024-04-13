import { Component } from '@angular/core';
import { CouponService } from '../../../services/coupon.service';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent {

  headerList = ["id", "code", "discount_type","discount_value","valid_from","valid_to","usage_limit","remaining_count","created_at"];
  coupons:any[] = [
    {
      "id": 2,
      "code": "Fawry",
      "discount_type": "FIXED",
      "discount_value": 20,
      "valid_from": "2024-04-01",
      "valid_to": "2024-05-20",
      "usage_limit": 10,
      "remaining_count": 10,
      "created_at": "2024-03-30T03:52:07.329689"
    },
    {
      "id": 1,
      "code": "SAVE10",
      "discount_type": "PERCENTAGE",
      "discount_value": 10,
      "valid_from": "2024-03-20",
      "valid_to": "2024-04-20",
      "usage_limit": 100,
      "remaining_count": 99,
      "created_at": "2024-03-30T03:48:31.392285"
    }
  ];

  constructor(private coupon:CouponService){
    // this.coupons.getAllCoupons().subscribe( data => {
    //   console.log(data);
    // })
  }

  editCoupon(event:any){
    console.log(event);
  }

  deleteCoupon(event:any){
    console.log(event);
  }

}
