import { CartItemCtr, ItemDetails, IncDec } from './cart-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
const CartItem = ({ cartData }) => {
  const { name, quantity, imageUrl, price } = cartData;
  const { addDataToCart, removeDataFromCard } = useContext(CartContext);
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
        <span onClick={() => addDataToCart(cartData)}>▲</span>
        <span onClick={() => removeDataFromCard(cartData)}>▼</span>
      </IncDec>
    </CartItemCtr>
  );
};
export default CartItem;
