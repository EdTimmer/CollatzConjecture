import {
  HeaderContainer,
  TitleContainer,
  Title,
  ExplanationContainer,
  Explanation,
} from './Header.css';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Collatz Conjecture Plotter</Title>
      </TitleContainer>
      <ExplanationContainer>
        <Explanation>
          Pick any positive integer. If it's even, divide it by 2. If it's odd,
          multiply it by 3 and add 1. Apply same operation on the obtained
          integer. The conjecture is that for any positive start integer, the
          sequence will always reach a 4, 2, 1 infinite loop.
        </Explanation>
      </ExplanationContainer>
    </HeaderContainer>
  );
};

export default Header;
