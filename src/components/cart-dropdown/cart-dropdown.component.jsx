import './cart-dropdown.styles.jsx';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { selectCartData } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartData = useSelector(selectCartData);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const gotoChecout = () => {
    dispatch(setIsCartOpen(false));
    navigation('/checkout');
  };

  return (
    <CartDropdownContainer>
      {cartData.length === 0 && (
        <EmptyMessage>No items in the cart</EmptyMessage>
      )}
      <CartItems>
        {cartData.map((item) => (
          <CartItem key={item.id} cartData={item} />
        ))}
      </CartItems>
      <Button disabled={cartData.length === 0} onClick={gotoChecout}>
        Go To Checkout <span>➠</span>
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
