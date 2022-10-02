import styled from 'styled-components';

export const HeaderContainer = styled.div`
  /* background: #7c73e6;
  color: white; */
  /* padding: 20px; */
  width: 100%;
  /* border-bottom: 3px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  background: black;
  color: white;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: #ffe9e3;
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const Explanation = styled.p`
  padding: 12px;
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  /* background: #c4c1e0;
  color: white; */
`;