import { useStore } from './store';
import { DataContainer, TextLabel, DataValues, IterationsRow, SingleValue } from './RawData.css';

const RawData = () => {
  const collection = useStore((state) => state.collection);
  
  const numOfOperations = collection.length ? collection.length - 1 : 0;
  
  return (
    <DataContainer>
      <TextLabel>Numbers: </TextLabel>
      <DataValues>
        {
          collection.map(val => {
            return (
              <SingleValue>{val}</SingleValue>
            )
          })
        }
      </DataValues>
      <IterationsRow>
        <TextLabel>Number of Operations: </TextLabel>
        <DataValues>{numOfOperations}</DataValues>
      </IterationsRow>
    </DataContainer>
  );
}

export default RawData;
