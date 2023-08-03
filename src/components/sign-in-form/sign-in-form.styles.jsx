import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  width: 39%;
  flex-direction: column;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 1000px) {
    width: 60%;
  }
`;
export const BtnFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
