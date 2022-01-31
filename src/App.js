import './styles/global.css'
import Navbar from './components/Navbar'
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
    <div className="App">
      <Navbar name="My book store"/>
      <ProductsContainer/>
    </div>
  );
}

export default App;
