import { useState } from "react";
import { useStore } from './store';
import { runCollatz } from "./CollatzAlgorithm";
import { FormContainer, TextLabel, StyledButton, StyledInput } from "./InputForm.css";

const InputForm = () => {
  const [num, setNum] = useState<number>(0);
  
  const collection = useStore(state => state.collection);
  const addToCollection = useStore(
    (state) => state.addToCollection
  );
  const clearCollection = useStore(state => state.clearCollection);
  console.log('collection :>> ', collection);

  const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumString = event.target.value;
    const newNum = newNumString ? parseInt(newNumString) : 0;
    setNum(newNum);
  };
  
  const handleSubmit = () => {
    clearCollection();
    console.log('num', num)
    runCollatz(num, addToCollection);
  };
  
  const handleClear = () => {
    clearCollection();
  };
  
  return (
    <FormContainer>
        <TextLabel>Start Number:</TextLabel>
        <StyledInput type="text" value={num} name="num" onChange={handleNumChange} />
        <StyledButton type="submit" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <StyledButton type="submit" onClick={handleClear}>
          Clear
        </StyledButton>

    </FormContainer>
  );
}

export default InputForm;
