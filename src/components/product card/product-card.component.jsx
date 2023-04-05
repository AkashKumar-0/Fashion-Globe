import { ProductCardCtr, Footer } from './product-card.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addDataToCart } from '../../store/cart/cart.action.js';
import { selectCartData } from '../../store/cart/cart.selector.js';
import { ReactComponent as CartIcon } from '../../assets/add-to-cart-3046.svg';
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
      <CartIcon className="carticon" onClick={addProductToCart} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>
    </ProductCardCtr>
  );
};

export default ProductCard;
