import { ProductCardCtr, Footer } from './product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { addDataToCart } = useContext(CartContext);

  const addProductToCart = () => addDataToCart(product);

  const { name, price, imageUrl } = product;
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
