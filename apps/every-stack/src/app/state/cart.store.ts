import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import {
  addEntity,
  removeEntity,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { Product } from './products.store';
import { InjectionToken, computed } from '@angular/core';

export interface CartItem {
  product: Product;
  qty: number;
  id: number;
}

export type CartState = {
  discountPercent: number;
};

const initialState: CartState = {
  discountPercent: 0,
};

export const CART_STATE = new InjectionToken<CartState>('CartState', {
  factory: () => initialState,
});

export const CartStore = signalStore(
  { providedIn: 'root' },
  withEntities<CartItem>(),
  withComputed(({ ids, entities }) => ({
    count: computed(() => ids().length),
    totalPrice: computed(() =>
      entities().reduce((acc, current) => {
        return acc + current.product.price * current.qty;
      }, 0)
    ),
  })),
  withMethods((store) => ({
    addProductToCart: (product: Product) => {
      const cartItem = store.entityMap()[product.id];
      if (cartItem) {
        patchState(
          store,
          updateEntity({
            id: cartItem.id,
            changes: {
              qty: cartItem.qty + 1,
            },
          })
        );
      } else {
        patchState(
          store,
          addEntity({
            id: product.id,
            product,
            qty: 1,
          })
        );
      }
    },
    updateQuantity: (productId: number, newQty: number) => {
      if (newQty > -1) {
        patchState(
          store,
          updateEntity({
            id: productId,
            changes: {
              qty: newQty,
            },
          })
        );
      }
    },
    removeItem: (productId: number) => {
      patchState(store, removeEntity(productId));
    },
  }))
);
