import { Injectable } from '@angular/core';
import { signalState } from '@ngrx/signals';

export interface Product {
  price: number;
  currency: string;
  discountPercent: number;
  name: string;
  imageUrl: string;
  id: number;
}

type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [
    {
      price: 4.75,
      currency: 'USD',
      discountPercent: 0,
      name: 'Chips',
      imageUrl: '/assets/chips.jpg',
      id: 1,
    },
    {
      price: 3.25,
      currency: 'USD',
      discountPercent: 0,
      name: 'Milka Chocolate',
      imageUrl: '/assets/milka.png',
      id: 2,
    },
  ],
};
@Injectable()
export class ProductsStore {
  readonly #state = signalState(initialState);
  readonly products = this.#state.products;
}
