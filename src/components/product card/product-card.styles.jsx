import styled from 'styled-components';

export const ProductCardCtr = styled.div`
  width: 80%;
  min-width: 10%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 5px;
  border: 1px dashed rgba(5, 10, 10, 0.1);
  padding: 35px;
  margin: 2.5rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: drop-shadow(0.1em 0.1em 0.1em #444);
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
    top: 90px;
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
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  font-size: 0.9em;
`;
