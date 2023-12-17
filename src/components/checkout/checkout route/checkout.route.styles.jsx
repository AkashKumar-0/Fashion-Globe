import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1em;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  // padding: 0 10px;
  // border: 1px solid red;
`;

export const Arrow = styled.div`
  cursor: pointer;
  // border: 1px solid blue;
  // padding: 0 10px;
  z-index: 10;
`;

export const Value = styled.span`
  margin: 0 0.6%;
  // border: 1px solid green;
  transform: translateX(-10px);
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
