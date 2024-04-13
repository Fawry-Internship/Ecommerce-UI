import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {saveToken, usersHost} from "../../../../environments/environments";
import {AccountRegister} from "../../../../models/account-register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  private baseUrl = usersHost();

  submitForm() {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.value as AccountRegister).subscribe({
        next: response => {
          saveToken(response.token)
          this.router.navigate(['home']);
          console.log(response);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
    }
  }
}
