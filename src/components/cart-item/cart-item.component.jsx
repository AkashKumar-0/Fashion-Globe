import './cart-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
const CartItem = ({ cartData }) => {
  const { name, quantity, imageUrl, price } = cartData;
  const { addDataToCart, removeDataFromCard } = useContext(CartContext);
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h1>{name}</h1>
        <span>
          {quantity} x ${price}
        </span>
      </div>
      <div className="incDec">
        <span onClick={() => addDataToCart(cartData)}>▲</span>
        <span onClick={() => removeDataFromCard(cartData)}>▼</span>
      </div>
    </div>
  );
};
export default CartItem;
