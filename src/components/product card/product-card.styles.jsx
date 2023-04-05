import styled from 'styled-components';

export const ProductCardCtr = styled.div`
  width: 100%;
  display: flex;
  height: 330px;
  flex-direction: column;
  align-items: center;
  // border: 1px solid red;
  position: relative;
  img {
    width: 55%;
    border-radius: 50%;
    height: 50%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  .carticon {
    border-radius: 5px;
    width: 50px;
    border: none;
    cursor: pointer;
    height: 40px;
    box-sizing: border-box;
    position: absolute;
    background: transparent;
    top: 120px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.6;
    }

    .carticon {
      display: flex;
      transition: all 0.5s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 70%;
  height: auto;
  // border: 1px solid red;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`;
