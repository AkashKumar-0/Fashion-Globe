import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartData,
    cartCount,
    setCartCount,
    setCartTotal,
  } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    // console.log(`Is Cart Open : ${!isCartOpen}`);
  };

  useEffect(() => {
    const count = cartData.reduce((acc, el) => acc + el.quantity, 0);

    setCartCount(`${count}`);
  }, [cartData, setCartCount]);

  useEffect(() => {
    const total = cartData.reduce(
      (acc, el) => acc + +el.quantity * +el.price,
      0
    );
    setCartTotal(total);
  }, [cartData, setCartTotal]);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
