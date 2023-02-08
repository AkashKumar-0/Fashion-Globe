import './product-card.styles.scss';
import Button from '../button/button.component';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { addDataToCart } = useContext(CartContext);

  const addProductToCart = () => addDataToCart(product);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img className="image" src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
