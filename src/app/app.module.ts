import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from "./admin/admin.module";
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './shared/components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AllProductsComponent} from "./customer/components/all-products/all-products.component";
import {ProductsDetailsComponent} from "./customer/components/all-products/products-details/products-details.component";
import { CartModule } from 'src/app/customer/cart/cart.module';
import { CheckoutModule } from 'src/app/customer/checkout/checkout.module';




@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        HeaderComponent,
        LoginComponent,
        AllProductsComponent,
        ProductsDetailsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ReactiveFormsModule,
    CartModule,
    CheckoutModule
  ]
})
export class AppModule { }


