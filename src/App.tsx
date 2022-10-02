import { AppContainer } from './App.css';
import InputForm from './InputForm';
import Chart from './Chart';
import RawData from './RawData';
import Header from './Header';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <InputForm />
      <RawData />
      <Chart />
    </AppContainer>
  );
}

export default App;
