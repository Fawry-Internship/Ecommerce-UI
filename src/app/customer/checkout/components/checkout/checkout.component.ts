import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {OrderService} from "../../../cart/services/order.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  item: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.item = history.state.item;
    this.createCheckoutForm();
  }

  createCheckoutForm(): void {
    this.checkoutForm = this.formBuilder.group({
      customerEmail: ['', [Validators.required, Validators.email]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      couponCode: ['']
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const couponCode = this.checkoutForm.value.couponCode ? this.checkoutForm.value.couponCode : null;

      const orderData = {
        productCode: this.item.code,
        customerEmail: this.checkoutForm.value.customerEmail,
        price: this.item.price,
        cardNumber: this.checkoutForm.value.cardNumber,
        couponCode: couponCode
      };

      this.orderService.createOrder(orderData).subscribe(
        (response: any) => {
          console.log('Order created successfully:', response);
        },
        (error: any) => {
          console.error('Error creating order:', error);
        }
      );
    } else {
      // Form is invalid, handle accordingly
    }
  }
}
