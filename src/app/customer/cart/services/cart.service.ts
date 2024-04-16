// cart.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  getItems() {
    return this.items;
  }

  addToCart(item: any) {
    this.items.push(item);
  }

  removeFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
