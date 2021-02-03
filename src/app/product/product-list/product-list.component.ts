import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { IImages } from 'src/app/core/images';
import { IProduct } from 'src/app/core/product';
import { ProductService } from 'src/app/core/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  images: IImages[] = [];
  $page = 1;
  $pageSize = 8;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList()
    .subscribe(results => this.productList = results);
    this.productService.getImagesList()
    .subscribe(results => this.images = results);
  }

}
