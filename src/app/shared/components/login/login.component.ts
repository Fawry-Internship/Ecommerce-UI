import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../admin/services/auth.service";
import {Router} from "@angular/router";
import {AccountLogin} from "../../models/account-login";
import {saveToken} from "../../environments/environments";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.authenticate(this.loginForm.value as AccountLogin).subscribe({
        next: response => {
          saveToken(response.token);
          if(this.authService.IsValidToken()){
            this.router.navigate(['admin/']);
          }
          console.log(response);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
    }
  }
}
