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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 30px;
  margin: 50px;
  row-gap: 30px;
`;
