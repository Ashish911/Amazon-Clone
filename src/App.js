import './App.css';
import Header from './component/Header';
import Home from './Screen/Home';

function App() {
  return (
    // BEM Convention
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
