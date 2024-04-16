import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCouponComponent } from './admin/components/coupon/view-coupon/view-coupon.component';
import { ViewUsersComponent } from "./admin/components/users/view-users/view-users.component";
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { LoginComponent } from "./shared/components/login/login.component";
import {DashboardComponent} from "./admin/components/dashboard/dashboard.component";
import {AuthGuard} from "./shared/guards/auth-guard.service";
import {AuthGuardLogin} from "./shared/guards/auth-guard-login";
import { AddStoreComponent } from "./admin/components/store/add-store/add-store.component"; 
import { ViewStoreComponent } from './admin/components/store/view-store/view-store.component';
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardLogin] },
  {
    path: 'admin', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'coupon', component: ViewCouponComponent },
      { path: 'users', component: ViewUsersComponent },
      {path:  'store', component: ViewStoreComponent }
    ]
  },
  { path: '**', redirectTo: '/welcome' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
