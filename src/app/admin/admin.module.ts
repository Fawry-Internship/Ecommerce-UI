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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewUsersComponent } from './components/users/view-users/view-users.component';
import {UsersComponent} from "./components/users/users.component";
import {AddUserComponent} from "./components/users/add-user/add-user.component";
import { ProductsComponent } from './components/products/products.component';
import { ViewProductComponent } from './components/products/view-product/view-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import {AddStockComponent} from "./components/stock/add-stock/add-stock.component";
import {EditStockComponent} from "./components/stock/edit-stock/edit-stock.component";
import {ViewStockComponent} from "./components/stock/view-stock/view-stock.component";
import {StockComponent} from "./components/stock/stock.component";
import {EditProductComponent} from "./components/products/edit-product/edit-product.component";
import {AddStoreComponent} from "./components/store/add-store/add-store.component";
import {ViewStoreComponent} from "./components/store/view-store/view-store.component";
import { TypeofPipePipe } from '../shared/pipes/typeof-pipe.pipe';
import { EditCouponComponent } from './components/coupon/edit-coupon/edit-coupon.component';

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
    UsersComponent,
    AddUserComponent,
    ProductsComponent,
    ViewProductComponent,
    AddProductComponent,
    ViewStoreComponent,
    AddStoreComponent,
    EditProductComponent,
    StockComponent,
    ViewStockComponent,
    EditStockComponent,
    AddStockComponent,
    EditCouponComponent,
    TypeofPipePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CouponService
  ],
  exports: [
    DashboardComponent,
    SidebarMenuComponent,
    ViewStoreComponent
  ]
})
export class AdminModule { }
