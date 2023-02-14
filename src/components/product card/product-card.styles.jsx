import styled from 'styled-components';

export const ProductCardCtr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  img {
    width: 80%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
export const Footer = styled.footer`
  width: 80%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  & :first-child {
    width: 90%;
    height: 30px;
    // border: 1px solid red;
    // margin-bottom: 15px;
  }

  & :last-child {
    width: 10%;
    // border: 1px solid red;
  }
`;
