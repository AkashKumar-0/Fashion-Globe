import { CatParamCtr, ParamTitle } from './category.styles.jsx';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector.js';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product card/product-card.component';

const Category = () => {
  const { category } = useParams();
  console.log('render/re-rendering category component');

  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
    // console.log(categoriesMap[category]);
    console.log('effect fire calling setProducts');
  }, [categoriesMap, category]);

  return (
    <>
      <ParamTitle>{category.toUpperCase()}</ParamTitle>
      <CatParamCtr>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CatParamCtr>
    </>
  );
};
export default Category;
