import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCartData,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import CheckoutItem from './checkout route/checkout.route.component';

import {
  CheckoutCtr,
  CheckoutHeader,
  Total,
  HeaderBlock,
} from './checkout.styles.jsx';

const headerData = [' Product', 'Discription', 'Quantity', 'Price', 'Remove'];

const Checkout = () => {
  const cartData = useSelector(selectCartData);
  const cartTotal = useSelector(selectCartTotal);

  const Navigate = useNavigate();
  /**
   * @param {change Route} if nothing in the cart then change route to shop
   */
  useEffect(() => {
    cartData.length === 0 && Navigate('/shop');
  }, [Navigate, cartData.length]);

  return (
    <CheckoutCtr>
      <CheckoutHeader>
        {headerData.map((el, i) => {
          return (
            <HeaderBlock key={i}>
              <span>{el}</span>
            </HeaderBlock>
          );
        })}
      </CheckoutHeader>
      {cartData.map((card) => (
        <CheckoutItem key={card.id} card={card} />
      ))}
      <Total>Total : {cartTotal}</Total>
    </CheckoutCtr>
  );
};
export default Checkout;
