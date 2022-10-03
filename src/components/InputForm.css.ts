import styled from 'styled-components';
import colors from '../styles/colors';

export const FormContainer = styled.div`
  border-top: 1px solid ${colors.teal};
  border-bottom: 1px solid ${colors.teal};
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextLabel = styled.p`
  font-size: 22px;
  margin: 0 10px 0 0;
`;

export const StyledButton = styled.button`
  background: ${colors.teal};
  color: ${colors.lightBeige01};  
  height: 32px;
  margin-left: 10px;
  border-width: 0;
  border-radius: 4px;
  color: ${colors.white};
  font-size: 18px;
`;

export const StyledInput = styled.input`
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  background: ${colors.lightGray01};
  border: 1px solid ${colors.teal};
  border-radius: 4px;
`;
