import { createSelector } from 'reselect';

/**
 *@reselect With Reselect, you can create selectors that are aware of the input data they depend on. When the Redux store is updated, Reselect checks if the input data for a selector has changed. If the input data remains the same, Reselect returns the previously computed result without re-evaluating the selector. This saves unnecessary computation and prevents unnecessary re-renders of components.

 *exp : createSelector(
  [input],
  whatever the o/p of the input.
);
 */

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
