import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductComponent } from './product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSingleComponent,
    ProductComponent,

  ],
  imports: [CommonModule, ProductRoutingModule, NgbModule],
})
export class ProductModule {}
