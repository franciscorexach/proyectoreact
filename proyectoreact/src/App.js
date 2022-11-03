import './App.scss';
import Navbar from './components/Navbar'
import Producto from './components/Producto';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import Counter from './components/Counter'
import { UserLayout } from './components/UserLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={"/category/:categoria"} element={<Category/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
