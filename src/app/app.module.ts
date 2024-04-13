import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from "./admin/admin.module";
import { WelcomeComponent } from './customer/components/welcome/welcome.component';
import { HeaderComponent } from './customer/components/header/header.component';
import { LoginComponent } from './customer/components/login/login.component';
import { RegisterComponent } from './admin/components/users/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
