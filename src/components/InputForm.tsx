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

  const addToCollection = useStore((state) => state.addToCollection);
  const clearCollection = useStore((state) => state.clearCollection);

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

  return (
    <FormContainer>
      <TextLabel>Start Integer:</TextLabel>
      <form>
        <StyledInput
          type="text"
          value={num ? num : ''}
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
