import { useContext, Fragment } from 'react';
import './shop.styles.scss';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product card/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  // console.log(products);
  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <div className="products-category-container" key={title}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <div className="products-container">
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </Fragment>
  );
};
export default Shop;
