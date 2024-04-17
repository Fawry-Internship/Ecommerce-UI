import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCouponComponent } from './admin/components/coupon/view-coupon/view-coupon.component';
import { ViewUsersComponent } from "./admin/components/users/view-users/view-users.component";
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { LoginComponent } from "./shared/components/login/login.component";
import {DashboardComponent} from "./admin/components/dashboard/dashboard.component";
import {AuthGuard} from "./shared/guards/auth-guard.service";
import {AuthGuardLogin} from "./shared/guards/auth-guard-login";
import {AllProductsComponent} from "./customer/components/all-products/all-products.component";
import {ViewStoreComponent} from "./admin/components/store/view-store/view-store.component";
import {ViewProductComponent} from "./admin/components/products/view-product/view-product.component";
import {EditProductComponent} from "./admin/components/products/edit-product/edit-product.component";
import {EditStockComponent} from "./admin/components/stock/edit-stock/edit-stock.component";
import {ViewStockComponent} from "./admin/components/stock/view-stock/view-stock.component";
import { CartComponent } from 'src/app/customer/cart/components/cart/cart.component';
import { CheckoutComponent } from 'src/app/customer/checkout/components/checkout/checkout.component';
import { ViewCouponConsumptionComponent } from './admin/components/coupon/view-coupon-consumption/view-coupon-consumption.component';
import {EditCouponComponent} from "./admin/components/coupon/edit-coupon/edit-coupon.component";
import { EditStoreComponent } from './admin/components/store/edit-store/edit-store.component';
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardLogin] },
  { path: 'products', component: AllProductsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'admin', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'coupon', component: ViewCouponComponent },
      { path: 'coupon/edit', component: EditCouponComponent },
      { path: 'coupon/edit/:id', component: EditCouponComponent },
      { path:'coupon/consumption-history/:couponId', component: ViewCouponConsumptionComponent},
      { path: 'users', component: ViewUsersComponent },
      {path:  'store', component: ViewStoreComponent },
      {path: 'products', component: ViewProductComponent},
      {path: 'products/edit', component: EditProductComponent},
      {path: 'products/edit/:id', component: EditProductComponent},
      {path: 'stock/edit', component: EditStockComponent},
      {path: 'stock/edit/:id', component: EditStockComponent,},
      {path: 'stock', component: ViewStockComponent},
      { path: 'edit-store/:id', component: EditStoreComponent },
      { path: 'edit-store', component: EditStoreComponent }
    ]
  },
  { path: '**', redirectTo: '/welcome' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

