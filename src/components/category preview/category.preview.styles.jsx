import styled from 'styled-components';

export const CatPreviewCtr = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(80px);
  margin-bottom: 30px;
`;
export const PreviewTitle = styled.div`
  cursor: pointer;
  margin: auto;
  width: fit-content;
  letter-spacing: 4px;
  font-weight: 900;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.9fr));
  column-gap: 50px;
  margin: 20px;
  // border: 1px solid blue;
  // row-gap: 30px;
`;
