import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  position: fixed;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: transparent;
  z-index: 1000;
  padding: 20px;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 1px 1px -5px rgba(173, 169, 150, 0.7);
    background: linear-gradient(
      to left,
      rgba(234, 234, 234, 0.3),
      rgba(219, 219, 219, 0.2),
      rgba(242, 242, 242, 0.01),
      rgba(243, 243, 243, 0.1)
    );
  }
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
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
  padding: 0 40px;
  font-weight: 900;
  align-items: center;
  column-gap: 2rem;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  text-decoration: none;
  position: relative;

  &:active {
    transform: scale(1.09);
  }

  &::before {
    content: '';
    width: 0px;
    height: 2px;
    background: black;
    position: absolute;
    top: 100%;
    left: 0;
    transition: 0.5s;
  }

  &:hover::before {
    width: 50%;
    transform: translateX(100%);
  }
`;
