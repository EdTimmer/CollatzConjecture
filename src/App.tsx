import './App.css';
import { useStore } from './store';

import InputForm from './InputForm';

const App = () => {

  const collection = useStore((state) => state.collection);

  // console.log('collection', collection)
  return (
    <div className="App">
      <InputForm />
      <h1>{collection.toString()}</h1>
      <h1>{collection.length}</h1>
    </div>
  );
}

export default App;
