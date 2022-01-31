import './styles/global.css'
import NavbarContainer from './components/NavbarContainer'
import ProductsContainer from './components/ProductsContainer';
import ProductsContainerWithHook from './components/ProductsContainerWithHook';

function App() {
  return (
    <div className="App"> 
      {
        // CHALLENGE MAP AND PROMISES
        /*<>
          <Navbar name="My book store"/>
          <ProductsContainer/>
        </>*/
      }

      {
        // PERSONAL WORK (HOOKS)
        <>
          <NavbarContainer name="TOTE-ME"/>
          <ProductsContainerWithHook/>
        </>
      }
    </div>
  );
}

export default App;
