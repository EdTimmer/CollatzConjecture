import { useStore } from './store';

import { AppContainer } from './App.css';
import InputForm from './InputForm';
import Chart from './Chart';
import RawData from './RawData';

const App = () => {

  const collection = useStore((state) => state.collection);

  return (
    <AppContainer>
      <InputForm />
      <RawData />
      <Chart />
    </AppContainer>
  );
}

export default App;
