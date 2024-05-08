import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, CartStore } from '../../state/cart.store';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  readonly cartStore = inject(CartStore);
  constructor(public dialogRef: MatDialogRef<CartComponent>) {}
  displayedColumns = ['id', 'name', 'qty', 'price', 'actions'];
  addOneToQuantity(item: CartItem) {
    this.cartStore.updateQuantity(item.id, item.qty + 1);
  }
  removeOneFromQuantity(item: CartItem) {
    this.cartStore.updateQuantity(item.id, item.qty - 1);
  }
}
