import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSingleComponent,
    ProductComponent,

  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
