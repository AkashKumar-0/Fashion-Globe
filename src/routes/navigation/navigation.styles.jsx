import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  z-index: 1;
  position: fixed;
  background-color: rgba(255, 254, 254, 0.8);
  z-index: 1000;
  justify-content: space-between;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: center;

  &:hover {
    filter: drop-shadow(0 0 2em #333);
  }
`;
export const NavLinksContainer = styled.div`
  width: fit-content;
  height: 100%;
  border-radius: 20px;
  display: flex;
  margin-right: 40px;
  padding: 0 40px;
  font-weight: 900;
  align-items: center;
  column-gap: 2rem;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:active {
    transform: scale(1.09);
  }
`;
