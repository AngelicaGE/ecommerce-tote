import './styles/global.css'
import Paths from './routes/Paths';
import { CartProvider } from './context/CartContext';
import {UserProvider} from './context/UserContext.jsx'
import {SideMenuProvider} from './context/SideMenuContext.jsx'
function App() {
  return (
    <div className="App"> 
      <UserProvider>
      <CartProvider>
      <SideMenuProvider>
        <Paths></Paths>
      </SideMenuProvider>
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
