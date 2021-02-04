import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private store: Storage;
  items = [];
  constructor() { }

  AddToCart(product) {
    this.items.push(product);

  }
  getItems() {
    console.log(this.items);
    return this.items;
  }
}
