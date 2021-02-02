import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/product';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList()
    .subscribe(results => this.productList = results);
  }

}
