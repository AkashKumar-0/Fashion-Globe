import {
  CatPreviewCtr,
  PreviewTitle,
  Preview,
} from './category.preview.styles.jsx';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../product card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(title);
  };
  return (
    <CatPreviewCtr>
      <PreviewTitle onClick={onNavigateHandler}>
        <span>{title.toUpperCase()}</span>
      </PreviewTitle>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CatPreviewCtr>
  );
};

export default CategoryPreview;
