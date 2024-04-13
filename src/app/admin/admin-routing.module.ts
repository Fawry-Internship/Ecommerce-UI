import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewCouponComponent } from './components/coupon/view-coupon/view-coupon.component';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'coupon',
  //       component: ViewCouponComponent,
  //     }
  //   ]
  // },
  // { path: 'coupon', component: ViewCouponComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
