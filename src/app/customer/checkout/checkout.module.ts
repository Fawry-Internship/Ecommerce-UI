import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CheckoutComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CheckoutModule { }
