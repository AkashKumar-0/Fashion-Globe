import styled from 'styled-components';

export const CartItemCtr = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  // border: 1px solid red;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;
export const ItemDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 10px 20px;

  h1 {
    font-size: 0.8em;

    // border: 1px solid red;
  }
  span {
    width: 120%;
    // right: 20px;
    font-size: 0.8em;
    // border: 1px solid red;
  }
`;
export const IncDec = styled.div`
  position: relative;
  // border: 1px solid red;
  margin: auto;
  z-index: 10;
  right: 15px;
  height: 30px;
  span {
    cursor: pointer;
  }
`;
