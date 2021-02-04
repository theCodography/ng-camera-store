import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductComponent } from './product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSingleComponent,
    ProductComponent,
    ShoppingCartComponent,

  ],
  imports: [CommonModule, ProductRoutingModule, NgbModule],
})
export class ProductModule {}
