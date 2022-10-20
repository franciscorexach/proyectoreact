import './App.scss';
import Tag from './components/Tag'
import Navbar from './components/Navbar'
import Producto from './components/Producto';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
    <ItemListContainer />
    <Navbar />
    <Producto 
    nombre="Botines Addidas"
    categoria="Calzado"
    precio={20000}
    imagen=""
    />
    </>
  );
}

export default App;
