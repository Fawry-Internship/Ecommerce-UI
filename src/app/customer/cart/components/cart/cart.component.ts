// cart.component.ts
import { Component } from '@angular/core';
import { CartService } from 'src/app/customer/cart/services/cart.service';
import { Router } from '@angular/router';
import {Product} from "../../../../shared/models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;

  constructor(private cartService: CartService , private router: Router) {
    this.items = this.cartService.getItems();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
  checkout(item: any) {
    this.router.navigate(['/checkout'], { state: { item } });
    this.cartService.clearCart();
  }
}
