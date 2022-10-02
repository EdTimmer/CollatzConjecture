import styled from 'styled-components';
import colors from '../styles/colors';

// const opacityAnimation = keyframes`
//   from {opacity: 0;}
//   to {opacity: 1;}
// `;

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
  background: ${colors.lightGray01};
  color: ${colors.teal};
  border: 1px solid black;
  border-radius: 4px;
  margin: 2px;
  padding: 1px 4px;
  
  &:first-child {
    color: ${colors.grey01};
  }
  
  &:nth-last-child(-n+3) {
    color: ${colors.orange};
  }
`;

export const OperationsRow = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OperationsValue = styled.div`
  background: ${colors.teal};
  color: ${colors.lightGray01};
  border: 1px solid black;
  border-radius: 4px;
  margin: 2px;
  padding: 0 4px;
  font-size: 20px;
  font-weight: bold;
`;
