import { createContext, useReducer } from 'react';
import createAction from '../utils/reducer/reducer.utils';
/**
 * @param {import('react').Context} CartContext to get the access of data easily
 */
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartData: [],
  cartCount: 0,
  cartTotal: 0,
  addDataToCart: () => {},
  removeDataFromCard: () => {},
  clearProductFromData: () => {},
});

const removeCartData = (cartData, productToRemove) => {
  const index = cartData.findIndex((data) => data.id === productToRemove.id);

  //splice(index, no of element from that index)
  if (productToRemove.quantity === 1) {
    // console.log(index, cartData);
    cartData.splice(index, 1);
    delete productToRemove.quantity;
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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartData: [],
  cartCount: 0,
  cartTotal: 0,
};

const userReducer = (state, action) => {
  // console.log(action);
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { cartData, cartCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (newCartData) => {
    const newCartCount = newCartData.reduce((acc, el) => acc + el.quantity, 0);

    const newCartTotal = newCartData.reduce(
      (acc, el) => acc + el.quantity * el.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartData: newCartData,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
    /*

  * generate newCartTotal
 
 * generate newCartCount

  * dispatch new action with payload = {
    newCartItems,
    newcartTotal,
    newcartCount
  }
  */
  };

  //logic for removing the item from cartData
  /**
   * @param {Object} productToRemove  logic for removing the item from cartData
   */

  const removeDataFromCard = (productToRemove) => {
    const newCartData = removeCartData(cartData, productToRemove);
    updateCartItemsReducer(newCartData);
  };

  /**
   * @param {Object} productToAdd logic for adding the item into cartData
   */
  const addDataToCart = (productToAdd) => {
    const newCartData = addCartData(cartData, productToAdd);
    updateCartItemsReducer(newCartData);
  };
  const clearProductFromData = (updateData) => {
    updateCartItemsReducer(updateData);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    cartData,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addDataToCart,
    removeDataFromCard,
    clearProductFromData,
  };
  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
