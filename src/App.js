import './scss/main.scss';
import TemporaryDrawer from './components/aditionals/drawer';
import Variables from './components/variables/Variables';
import CrearPagina from './components/hacerPagina/hacerPagina';

function App() {
  return (
    <div className="App">
      <header>
        <TemporaryDrawer></TemporaryDrawer>
      </header>
      <main>
        <CrearPagina></CrearPagina>
      </main>
    </div>
  );
}

export default App;
