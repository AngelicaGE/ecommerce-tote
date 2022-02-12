import './styles/global.css'
import Paths from './routes/Paths';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App"> 
      <CartProvider>
        <Paths></Paths>
      </CartProvider>
    </div>
  );
}

export default App;
