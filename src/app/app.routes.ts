import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'product-category/:category', component: ProductsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
