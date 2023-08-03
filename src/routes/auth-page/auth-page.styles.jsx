import styled from 'styled-components';
export const SignPage = styled.div`
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 1000px) {
    gap: 100px;
    flex-direction: column;
  }
`;
