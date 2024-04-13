import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './admin/coupon/coupon.component';
import { ViewCouponComponent } from './admin/coupon/view-coupon/view-coupon.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {path:'coupon', component: ViewCouponComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
