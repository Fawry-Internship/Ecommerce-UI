import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../../services/coupon.service';
import { Coupon } from 'src/app/shared/models/coupon';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit {
  headerList = ["id", "code", "discountType", "discountValue", "validFrom", "validTo", "usageLimit", "remainingCount", "createdAt"];
  coupons: Coupon[] = [];
  filteredCoupons: Coupon[] = [];
  searchTerm: string = '';


  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCoupons();
  }

  getAllCoupons(): void {
    this.couponService.getAllCoupons().subscribe(data => {
      this.coupons = data;
      this.filteredCoupons = [...this.coupons]; // Initialize filtered coupons with all coupons
    });
  }

  editCoupon(event: any): void {
    const couponId = event.id;
    this.router.navigate(['/admin/coupon/edit', couponId]);
  }

  deleteCoupon(event: any): void {
    const couponId = event.id;
    this.couponService.deleteCoupon(couponId).subscribe(
      (response: any) => {
        console.log('Coupon deleted successfully:', response);
        // Reload coupons after deletion
        this.getAllCoupons();
      },
      (error: any) => {
        console.error('Error deleting coupon:', error);
      }
    );
    window.location.reload();
  }

  applyFilter(): void {
    const searchTermLowerCase = this.searchTerm.toLowerCase().trim();
    this.filteredCoupons = this.coupons.filter(coupon =>
      coupon.code.toLowerCase().includes(searchTermLowerCase)
    );
  }

  getCouponConsumptionHistories(event:any){
    const couponId = event.id;
    this.router.navigate(['/admin/coupon/consumption-history', couponId]);
  }
}
