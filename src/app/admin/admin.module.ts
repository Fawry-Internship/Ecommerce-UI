import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { AddCouponComponent } from './components/coupon/add-coupon/add-coupon.component';
import { ViewCouponComponent } from './components/coupon/view-coupon/view-coupon.component';
import { ViewCouponConsumptionComponent } from './components/coupon/view-coupon-consumption/view-coupon-consumption.component';
import { CouponService } from './services/coupon.service';
import { ViewTableComponent } from './components/shared/view-table/view-table.component';
import { RouterModule } from '@angular/router';
import { AddNewComponent } from './components/shared/add-new/add-new.component';
import {FormsModule} from "@angular/forms";
import { ViewUsersComponent } from './components/users/view-users/view-users.component';
import {UsersComponent} from "./components/users/users.component";



@NgModule({
  declarations: [
    SidebarMenuComponent,
    DashboardComponent,
    CouponComponent,
    AddCouponComponent,
    ViewCouponComponent,
    ViewCouponConsumptionComponent,
    ViewTableComponent,
    AddNewComponent,
    ViewUsersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CouponService
  ],
  exports: [
    DashboardComponent,
    SidebarMenuComponent
  ]
})
export class AdminModule { }
