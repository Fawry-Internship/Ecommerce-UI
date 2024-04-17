import { CouponService } from 'src/app/admin/services/coupon.service';
import { Component, OnInit } from '@angular/core';
import { ConsumptionHistory } from 'src/app/shared/models/couponConsumption';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-coupon-consumption',
  templateUrl: './view-coupon-consumption.component.html',
  styleUrls: ['./view-coupon-consumption.component.css']
})
export class ViewCouponConsumptionComponent implements OnInit{
  headerList = [
    "consumptionDate",
    "discountValue",
    "orderId",
    "customerEmail"
  ]

  consumptionList:ConsumptionHistory[]=[];

  couponId!:number;

  constructor(private couponService:CouponService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.couponId = parseInt(params['couponId'])
      this.getCouponConsumptionHistories();
    });
  }

  getCouponConsumptionHistories(){
    this.couponService.getCouponConsumptionHistories(this.couponId).subscribe( data => {
      this.consumptionList = data;
    })
  }

}
