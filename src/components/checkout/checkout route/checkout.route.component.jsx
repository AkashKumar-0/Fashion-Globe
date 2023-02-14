import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout.route.styles.jsx';
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={() => removeDataFromCard(card)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addDataToCart(card)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>&#36; {price}</BaseSpan>
      <RemoveButton onClick={handleRemove}>&#x2718;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
