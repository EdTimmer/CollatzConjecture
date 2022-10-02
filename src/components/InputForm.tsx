import { useState } from 'react';
import { useStore } from '../store';
import { runCollatz } from '../utils/collatzAlgorithm';
import {
  FormContainer,
  TextLabel,
  StyledButton,
  StyledInput,
} from './InputForm.css';

const InputForm = () => {
  const [num, setNum] = useState<number | null>(null);

  const collection = useStore((state) => state.collection);
  const addToCollection = useStore((state) => state.addToCollection);
  const clearCollection = useStore((state) => state.clearCollection);
  console.log('collection :>> ', collection);

  const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumString = event.target.value;
    const newNum = newNumString ? parseInt(newNumString) : 0;
    setNum(newNum);
  };

  const handleSubmit = () => {
    if (num && num > 0) {
      clearCollection();
      runCollatz(num, addToCollection);
    }
  };

  const handleClear = () => {
    clearCollection();
    setNum(null);
  };
  console.log('num :>> ', num);
  return (
    <FormContainer>
      <TextLabel>Start Integer:</TextLabel>
      <form>
        <StyledInput
          type="text"
          value={num ? num : ''}
          name="num"
          onChange={handleNumChange}
        />
        <StyledButton type="submit" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <StyledButton type="button" onClick={handleClear}>
          Clear
        </StyledButton>
      </form>
    </FormContainer>
  );
};

export default InputForm;
