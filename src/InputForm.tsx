import { useState } from "react";
import { useStore } from './store';
import { runCollatz } from "./CollatzAlgorithm";

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
    <>
      <h1>Start Number</h1>
      <input type="text" value={num} name="num" onChange={handleNumChange} />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button type="submit" onClick={handleClear}>
        Clear
      </button>
    </>
  );
}

export default InputForm;
