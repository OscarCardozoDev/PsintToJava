import './scss/main.scss';
import TemporaryDrawer from './components/aditionals/drawer';
import Variables from './components/variables/Variables';

function App() {
  return (
    <div className="App">
      <TemporaryDrawer></TemporaryDrawer>
      <main>
        <Variables></Variables>
      </main>
    </div>
  );
}

export default App;
