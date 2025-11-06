import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ProductsList } from './components/ProductsList';
import { BarNav } from './components/BarNav';
import { ContentProvider } from './context/CartContext';
import { ProductDetail } from './components/ProductDetail';
import { CartList } from './components/CartList';

function App() {
  return (
    <>
      <ContentProvider>
        <BrowserRouter>
          <BarNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/productos/:pid" element={<ProductDetail />} />
            <Route path="/carrito" element={<CartList />} />
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </>
  );
}


export default App;
