import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {
  const { cartData, setIsCartOpen } = useContext(CartContext);
  const navigation = useNavigate();

  const gotoChecout = () => {
    setIsCartOpen(false);
    navigation('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      {cartData.length === 0 && (
        <div className="empty-message">No items in the cart</div>
      )}
      <div className="cart-items">
        {cartData.map((item) => {
          // console.log('id', item.id);
          return <CartItem key={item.id} cartData={item} />;
        })}
      </div>
      <Button
        disabled={cartData.length === 0}
        type="inverted"
        onClick={gotoChecout}
      >
        Go To Checkout <span>➠</span>
      </Button>
    </div>
  );
};

export default CartDropdown;
