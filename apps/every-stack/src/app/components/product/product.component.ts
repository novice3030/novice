import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../state/products.store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  product = input.required<Product>();
  @Output() addToCartClick = new EventEmitter<void>();
}
