import { useNavigate } from 'react-router-dom';

import {
  DirectoryContainer,
  DirectoryBody,
  BackgroundImage,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBody>
        <h2>{title}</h2>
      </DirectoryBody>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
