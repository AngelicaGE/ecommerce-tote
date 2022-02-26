import './styles/global.css'
import Paths from './routes/Paths';
import { CartProvider } from './context/CartContext';
import {UserProvider} from './context/UserContext'

function App() {
  return (
    <div className="App"> 
      <UserProvider>
      <CartProvider>
        <Paths></Paths>
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
