import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from './product';
import {Products} from './mock-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = Products;
  constructor() { }

  getProductList(): Observable<IProduct[]> {
    return of(this.products).pipe(delay(50));
  }

  findProductById(id: string): Observable<IProduct> {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
}
