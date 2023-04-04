import { ProductCardCtr, Footer } from './product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addDataToCart } from '../../store/cart/cart.action.js';
import { selectCartData } from '../../store/cart/cart.selector.js';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartData = useSelector(selectCartData);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addDataToCart(cartData, product));
  };

  return (
    <ProductCardCtr>
      <img className="image" src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </ProductCardCtr>
  );
};

export default ProductCard;
