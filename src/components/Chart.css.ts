import styled from 'styled-components';
import colors from '../styles/colors';

export const ChartContainer = styled.div`
  width: 100%;  
  margin-top: 12px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  &:first-child {
    background: ${colors.lightGray01};
  }
`;
