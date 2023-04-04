import { CartItemCtr, ItemDetails, IncDec } from './cart-item.styles.jsx';
import {
  addDataToCart,
  removeDataFromCard,
} from '../../store/cart/cart.action.js';
import { selectCartData } from '../../store/cart/cart.selector.js';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ cartData }) => {
  const { name, quantity, imageUrl, price } = cartData;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartData);

  const addDataHandler = () => dispatch(addDataToCart(cartItems, cartData));
  const removeDataHandler = () =>
    dispatch(removeDataFromCard(cartItems, cartData));
  return (
    <CartItemCtr>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <h1>{name}</h1>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
      <IncDec>
        <span onClick={addDataHandler}>▲</span>
        <span onClick={removeDataHandler}>▼</span>
      </IncDec>
    </CartItemCtr>
  );
};
export default CartItem;
