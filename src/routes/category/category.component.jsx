import { CatParamCtr, ParamTitle } from './category.styles.jsx';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/categories.selector.js';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product card/product-card.component';
import Spinner from '../../components/spinner/spinner.component.jsx';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
    // console.log(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <ParamTitle>{category.toUpperCase()}</ParamTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CatParamCtr>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CatParamCtr>
      )}
    </>
  );
};
export default Category;
