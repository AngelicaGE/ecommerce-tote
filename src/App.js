import './styles/global.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
