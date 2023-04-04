import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartData = createSelector(
  [selectCartReducer],
  (cart) => cart.cartData
);

export const selectCartCount = createSelector([selectCartData], (cartData) =>
  cartData.reduce((total, cart) => total + cart?.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartData], (cartData) =>
  cartData.reduce((total, cart) => total + cart?.quantity * cart.price, 0)
);
