import styled from 'styled-components';

export const DataContainer = styled.div`
  max-width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const TextLabel = styled.p`
  font-size: 22px;
  margin: 0 10px 0 0;
`;

export const DataValues = styled.p`
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SingleValue = styled.div`
  background: #ffe9e3;
  border: 1px solid black;
  border-radius: 4px;
  margin: 2px;
  padding: 4px;
`;

export const IterationsRow = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
