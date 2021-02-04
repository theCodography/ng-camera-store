import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingCartComponent } from './product/shopping-cart/shopping-cart.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },

  {
    path: 'product',
    loadChildren: () =>
      import('../app/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'cart', component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
