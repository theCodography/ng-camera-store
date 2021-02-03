import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from './product';
import { Products } from './mock-product';
import { IImages } from './images';

const productUrl = 'https://store-database.herokuapp.com/product';
const imagesUrl = 'https://store-database.herokuapp.com/images';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[] = Products;

  constructor(private http: HttpClient) {}
  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(productUrl).pipe();
  }
  getImagesList(): Observable<IImages[]> {
    return this.http.get<IImages[]>(imagesUrl).pipe();
  }
  findProductById(id: string): Observable<IProduct> {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return of(product).pipe(delay(50));
    } else {
      return throwError(new Error('404 Not Found'));
    }
  }
}
