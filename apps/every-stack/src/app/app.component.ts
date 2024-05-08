import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CounterComponent } from './components/Counter.component';
import { Product, ProductsStore } from './state/products.store';
import { ProductComponent } from './components/product/product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CartStore } from './state/cart.store';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './components/cart/cart.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    CounterComponent,
    ProductComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    CartComponent,
  ],
  providers: [ProductsStore],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    readonly productsStore: ProductsStore,
    private dialog: MatDialog
  ) {}
  title = 'every-stack';
  readonly cartStore = inject(CartStore);
  onAddToCartClicked(product: Product) {
    this.cartStore.addProductToCart(product);
  }

  showCart() {
    this.dialog.open(CartComponent, {
      autoFocus: false,
      maxHeight: '350px',
      maxWidth: '600px',
    });
  }
}
