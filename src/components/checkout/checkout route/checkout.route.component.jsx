import { useDispatch, useSelector } from 'react-redux';
import {
  addDataToCart,
  removeDataFromCard,
  clearProductFromCart,
} from '../../../store/cart/cart.action.js';
import { selectCartData } from '../../../store/cart/cart.selector.js';
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout.route.styles.jsx';

const CheckoutItem = ({ card }) => {
  const { name, imageUrl, price, quantity } = card;
  const cartData = useSelector(selectCartData);
  const dispatch = useDispatch();

  const addDataHandler = () => dispatch(addDataToCart(cartData, card));
  const removeDataHandler = () => dispatch(removeDataFromCard(cartData, card));
  const clearDataHandler = () => dispatch(clearProductFromCart(cartData, card));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeDataHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addDataHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>&#36; {price}</BaseSpan>
      <RemoveButton onClick={clearDataHandler}>&#x2718;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
