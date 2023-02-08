import { createContext, useState } from 'react';

/**
 * @param {import('react').Context} CartContext to get the access of data easily
 */
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartData: [],
  setCartData: () => {},
  addDataToCart: () => {},
  removeDataFromCard: () => {},
  cartCount: 0,
  setCartCount: () => {},
  setCartToal: () => {},
  cartTotal: 0,
});

const removeCartData = (cartData, productToRemove) => {
  const index = cartData.findIndex((data) => data.id === productToRemove.id);

  //splice(index, no of element from that index)
  if (productToRemove.quantity === 1) {
    console.log(index, cartData);
    cartData.splice(index, 1);
    delete productToRemove.quantity;
    console.log(cartData);
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

export const CartProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  //logic for removing the item from cartData
  /**
   * @param {Object} productToRemove  logic for removing the item from cartData
   */

  const removeDataFromCard = (productToRemove) => {
    setCartData(removeCartData(cartData, productToRemove));
  };

  /**
   * @param {Object} productToAdd logic for adding the item into cartData
   */
  const addDataToCart = (productToAdd) => {
    setCartData(addCartData(cartData, productToAdd));
  };
  /**
   * @param {object} CartContext to get the access of data easily
   */
  const value = {
    isCartOpen,
    setIsCartOpen,
    addDataToCart,
    cartData,
    setCartData,
    removeDataFromCard,
    cartCount,
    setCartCount,
    cartTotal,
    setCartTotal,
  };
  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
