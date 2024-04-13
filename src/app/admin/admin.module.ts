import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddCouponComponent } from './coupon/add-coupon/add-coupon.component';
import { ViewCouponComponent } from './coupon/view-coupon/view-coupon.component';
import { ViewCouponConsumptionComponent } from './coupon/view-coupon-consumption/view-coupon-consumption.component';
import { CouponService } from './services/coupon.service';
import { ViewTableComponent } from './shared/view-table/view-table.component';
import { RouterModule } from '@angular/router';
import { AddNewComponent } from './shared/add-new/add-new.component';



@NgModule({
  declarations: [
    SidebarMenuComponent,
    DashboardComponent,
    CouponComponent,
    AddCouponComponent,
    ViewCouponComponent,
    ViewCouponConsumptionComponent,
    ViewTableComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    CouponService
  ],
  exports:[
    DashboardComponent
  ]
})
export class AdminModule { }
