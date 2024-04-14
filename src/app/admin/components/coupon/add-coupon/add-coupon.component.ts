import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouponService } from 'src/app/admin/services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit{
  couponForm !: FormGroup;
  discountType =["PERCENTAGE", "FIXED"]
  formValue:any;

  constructor(private fb: FormBuilder, private couponService:CouponService){}

  ngOnInit(): void{
    this.createCoupon();
  }

  createCoupon() {
    this.couponForm = this.fb.group({
      code: ['', Validators.required],
      discountType: [this.discountType, Validators.required],
      discountValue: ['', Validators.required],
      validFrom: ['', Validators.required],
      validTo: ['', Validators.required],
      usageLimit: ['', Validators.required],
    });
    this.couponService.createCoupon(this.couponForm.value).subscribe(createdCoupon => {
      console.log('New coupon created:', createdCoupon);
      // Handle response as needed
    });
  }

  onSubmit() {
    if (this.couponForm.valid) {
      console.log(this.couponForm.value);
    }
  }

}
