import './checkout.route.styles.scss';
import { CartContext } from '../../../context/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({ card }) => {
  const { name, imageUrl, price, quantity } = card;
  const { cartData, setCartData, addDataToCart, removeDataFromCard } =
    useContext(CartContext);

  const handleRemove = () => {
    const index = cartData.filter((el) => card.id !== el.id);
    setCartData(index);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => removeDataFromCard(card)}>
          &#10096;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addDataToCart(card)}>
          &#10095;
        </span>
      </div>
      <span className="price">&#36; {price}</span>

      <div className="remove-button " onClick={handleRemove}>
        &#x2718;
      </div>
    </div>
  );
};
export default CheckoutItem;
