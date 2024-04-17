import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private localStorageKey = 'cartItems';
  private items: any[] = [];

  constructor() {
    const storedItems = localStorage.getItem(this.localStorageKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  getItems() {
    return this.items;
  }

  addToCart(item: any) {
    this.items.push(item);
    this.updateLocalStorage();
  }

  removeFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  clearCart() {
    this.items = [];
    this.updateLocalStorage();
    return this.items;
  }

  private updateLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.items));
  }
}
