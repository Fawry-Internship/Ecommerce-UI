import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {getToken, logOut} from "../../environments/environments";
import {AuthService} from "../../../admin/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private authService: AuthService) {
  }
  isAuthenticated() {
    return getToken() != null && this.authService.IsValidToken();
  }

  logout() {
    logOut()
    this.router.navigate(['']);
  }
}
