import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { IProduct } from 'src/app/core/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

}
