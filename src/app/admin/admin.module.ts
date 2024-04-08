import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddCouponComponent } from './coupon/add-coupon/add-coupon.component';
import { ViewCouponComponent } from './coupon/view-coupon/view-coupon.component';
import { ViewCouponConsumptionComponent } from './coupon/view-coupon-consumption/view-coupon-consumption.component';



@NgModule({
  declarations: [
    SidebarMenuComponent,
    DashboardComponent,
    CouponComponent,
    AddCouponComponent,
    ViewCouponComponent,
    ViewCouponConsumptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class AdminModule { }
