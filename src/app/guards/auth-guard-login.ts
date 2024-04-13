import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getToken } from "../environments/environments";
import {AuthService} from "../admin/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLogin implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!getToken() || !this.authService.IsValidToken()) {
      return true;
    } else {
      this.router.navigate(['admin/']);
      return false;
    }
  }
}
