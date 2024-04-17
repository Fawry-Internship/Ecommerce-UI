// edit-coupon.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coupon } from 'src/app/shared/models/coupon';
import { CouponService } from 'src/app/admin/services/coupon.service';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class EditCouponComponent implements OnInit {
  couponForm!: FormGroup;
  couponId!: number;

  discountType = ["PERCENTAGE", "FIXED"]; // Assuming you have this defined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private couponService: CouponService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.couponId = +idParam;
      this.getCouponDetails(this.couponId);
    } else {
      console.error('Coupon ID parameter is null.');
    }
  }

  getCouponDetails(couponId: number): void {
    this.couponService.getCouponById(couponId).subscribe(
      (coupon: Coupon) => {
        console.log(coupon)
        this.initCouponForm(coupon);
      },
      (error: any) => {
        console.error('Error fetching coupon:', error);
      }
    );
  }

  initCouponForm(coupon: Coupon): void {
    this.couponForm = this.fb.group({
      code: [coupon.code, Validators.required],
      discountType: [coupon.discountType, Validators.required],
      discountValue: [coupon.discountValue, Validators.required],
      validFrom: [coupon.validFrom, Validators.required],
      validTo: [coupon.validTo, Validators.required],
      usageLimit: [coupon.usageLimit, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.couponForm.valid) {
      const updatedCoupon = this.couponForm.value;
      console.log(updatedCoupon)
      this.couponService.updateCoupon(this.couponId, updatedCoupon).subscribe(
        (response: string) => {
          console.log('Coupon updated successfully:', response);
          this.router.navigate(['admin/coupon']);
        },
        (error: any) => {
          console.error('Error updating coupon:', error);
        }
      );
    } else {
      console.error('Form is invalid.');
    }
  }
}
