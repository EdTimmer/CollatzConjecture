import { useStore } from './store';
import { DataContainer, TextLabel, DataValues } from './RawData.css';

const RawData = () => {
  const collection = useStore((state) => state.collection);
  
  return (
    <DataContainer>
      <TextLabel>Numbers: </TextLabel>
      <DataValues>{collection.join(", ")}</DataValues>
      <TextLabel>Iterations: </TextLabel>
      <DataValues>{collection.length - 1}</DataValues>
    </DataContainer>
  );
}

export default RawData;
