import styled from 'styled-components';
import colors from '../styles/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  background: ${colors.teal};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: ${colors.lightBeige01};
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const ExplanationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Explanation = styled.p`
  padding: 12px;
  margin: 0;
  font-size: 18px;
  font-weight: normal;
`;
