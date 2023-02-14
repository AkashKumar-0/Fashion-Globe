import './cart-dropdown.styles.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartData, setIsCartOpen } = useContext(CartContext);
  const navigation = useNavigate();

  const gotoChecout = () => {
    setIsCartOpen(false);
    navigation('/checkout');
  };

  return (
    <CartDropdownContainer>
      {cartData.length === 0 && (
        <EmptyMessage>No items in the cart</EmptyMessage>
      )}
      <CartItems>
        {cartData.map((item) => {
          // console.log('id', item.id);
          return <CartItem key={item.id} cartData={item} />;
        })}
      </CartItems>
      <Button disabled={cartData.length === 0} onClick={gotoChecout}>
        Go To Checkout <span>➠</span>
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
