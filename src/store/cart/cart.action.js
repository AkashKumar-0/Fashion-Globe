import createAction from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const removeCartData = (cartData, productToRemove) => {
  const index = cartData.findIndex((data) => data.id === productToRemove.id);

  //splice(index, no of element from that index)
  if (productToRemove.quantity === 1) {
    // console.log(index, cartData);
    cartData.splice(index, 1);

    // console.log(cartData);
  } else {
    productToRemove.quantity -= 1;
  }
  return [...cartData];
};

const addCartData = (cartData, productToAdd) => {
  //check for present
  const newCard = cartData.filter((data) => data.id === productToAdd.id);
  // console.log(newCard, Boolean(newCard.length));

  //if newItem is not empty
  if (Boolean(newCard.length)) {
    newCard[0].quantity += 1;
    return [...cartData];
  }
  //add new product
  return [...cartData, { ...productToAdd, quantity: 1 }];
};

const clearCartData = (cartData, cartDataToBeClear) =>
  cartData.filter((cartItem) => cartItem.id !== cartDataToBeClear.id);

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const removeDataFromCard = (cartData, productToRemove) => {
  const newCartData = removeCartData(cartData, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_DATA, newCartData);
};

/**
 * @param {Object} productToAdd logic for adding the item into cartData
 */
export const addDataToCart = (cartData, productToAdd) => {
  const newCartData = addCartData(cartData, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_DATA, newCartData);
};
export const clearProductFromCart = (cartData, cartDataToBeClear) => {
  const newCartData = clearCartData(cartData, cartDataToBeClear);
  return createAction(CART_ACTION_TYPES.SET_CART_DATA, newCartData);
};
