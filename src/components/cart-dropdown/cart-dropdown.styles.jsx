import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 17rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  // border: 1px solid black;
  border-radius: 5px;
  top: 115px;
  z-index: 10;
  background-color: #f3f3f3;
  filter: drop-shadow(0.5em 0.5em 0.4em #333);
  right: 50px;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}, {
    margin-top: auto;
    span {
      padding-left: 20px;
    }
  }
  Button:disabled,
  Button[disabled] {
    border: none;
    background-color: #cccccc4f;
    color: #666666ec;
    cursor: not-allowed;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1em;
  margin: auto;
`;

export const CartItems = styled.div`
  height: 17rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
