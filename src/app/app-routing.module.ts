import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCouponComponent } from './admin/components/coupon/view-coupon/view-coupon.component';
import { ViewUsersComponent } from "./admin/components/users/view-users/view-users.component";
import { WelcomeComponent } from "./customer/components/welcome/welcome.component";
import { LoginComponent } from "./customer/components/login/login.component";
import { RegisterComponent } from "./admin/components/users/register/register.component";
import {DashboardComponent} from "./admin/components/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth-guard.service";
import {AuthGuardLogin} from "./guards/auth-guard-login";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardLogin] },
  {
    path: 'admin',
    canActivate: [AuthGuard], // Apply AuthGuard to the entire 'admin' path
    children: [
      { path: '', component: DashboardComponent }, // No need to apply AuthGuard here
      { path: 'coupon', component: ViewCouponComponent },
      { path: 'users', component: ViewUsersComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', redirectTo: '/welcome' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
