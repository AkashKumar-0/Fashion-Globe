import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from './checkout route/checkout.route.component';

import './checkout.styles.scss';

const headerData = [' Product', 'Discription', 'Quantity', 'Price', 'Remove'];

const Checkout = () => {
  const { cartData, cartTotal } = useContext(CartContext);
  const Navigate = useNavigate();
  /**
   * @param {chenge Route} if nothing in the cart themn change route to shop
   */
  useEffect(() => {
    cartData.length === 0 && Navigate('/shop');
  }, [Navigate, cartData.length]);

  return (
    <div className="checkout-container ">
      <div className="checkout-header">
        {headerData.map((el, i) => {
          return (
            <div key={i} className="header-block">
              <span>{el}</span>
            </div>
          );
        })}
      </div>
      {cartData.map((card) => (
        <CheckoutItem key={card.id} card={card} />
      ))}
      <span className="total">Total : {cartTotal}</span>
    </div>
  );
};
export default Checkout;
/**
 * {headerData.map((el, i) => {
          return (
            <div key={i} className="header-block">
              <span>{el}</span>
            </div>
          );
        })}
 */
