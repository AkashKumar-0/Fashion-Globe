import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const DirectoryBody = styled.div`
  height: 60px;
  width: auto-fill;
  transform: translateY(-55px);
  display: flex;
  align-items: center;
  top: 150px;
  border-top-left-radius: 5px 5px;
  border-top-right-radius: 5px 5px;
  justify-content: space-evenly;
  background-color: white;
  opacity: 0.7;
  // position: inherit;

  h2 {
    font-weight: bold;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: capitalize;
  }
`;

export const DirectoryContainer = styled.div`
  min-width: 10%;
  height: 230px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 45px 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${DirectoryBody} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
