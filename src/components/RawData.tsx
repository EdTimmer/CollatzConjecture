import { useStore } from '../store';
import {
  DataContainer,
  TextLabel,
  DataValues,
  OperationsRow,
  SingleValue,
  OperationsValue,
} from './RawData.css';

const RawData = () => {
  const collection = useStore((state) => state.collection);

  const numOfOperations = collection.length ? collection.length - 1 : 0;

  return (
    <DataContainer>
      <TextLabel>Integers: </TextLabel>
      <DataValues>
        {collection.map((val, index) => {
          return <SingleValue>{val}</SingleValue>;
        })}
      </DataValues>
      <OperationsRow>
        <TextLabel>Number of Operations: </TextLabel>
        <OperationsValue>{numOfOperations}</OperationsValue>
      </OperationsRow>
    </DataContainer>
  );
};

export default RawData;
