import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductsStore } from '../../state/products.store';
import { ProductComponent } from '../../components/product/product.component';
import { CartStore } from '../../state/cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent {
  constructor(readonly productsStore: ProductsStore) {}
  readonly cartStore = inject(CartStore);

  onAddToCartClicked(product: Product) {
    this.cartStore.addProductToCart(product);
  }
}
