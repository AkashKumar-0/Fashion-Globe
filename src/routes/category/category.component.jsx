import { CatParamCtr, ParamTitle } from './category.styles.jsx';
import { CategoriesContext } from '../../context/categories.context';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/product card/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log(categoriesMap[category]);
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
