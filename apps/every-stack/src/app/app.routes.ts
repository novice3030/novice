import { Route } from '@angular/router';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'counter',
    component: CounterPageComponent,
  },
];
