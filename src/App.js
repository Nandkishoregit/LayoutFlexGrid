import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { LayoutContextProvider } from './context/LayoutContext';


function App() {
  return (
    <div >
      <LayoutContextProvider>
        <Home />
      </LayoutContextProvider>
    </div>
  );
}

export default App;
