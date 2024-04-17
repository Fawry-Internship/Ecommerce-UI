import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import { AccountRegister } from 'src/app/shared/models/account-register';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.value as AccountRegister).subscribe({
        next: response => {
          this.router.navigate(['admin/users']);
          console.log(response);
          this.signupForm.reset();
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
    }
  }
}
