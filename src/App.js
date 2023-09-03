import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import CartWidget from './components/CartWidget/CartWidget';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import CheckOut from './components/CheckOut/CheckOut'
import { useState } from 'react';
import { ProductProvider } from './context/ProductsContext';
import SignIn from './components/googleSingin/SignIn';

function App() {
  const [cartCount, setCartCount] = useState(0);


  return (
    <ProductProvider>
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/:category?" element={<Products/>} />
          <Route path="/product/:productoId" element={<Product />}/>
          <Route path="/contact us" element={<h1>Encuentrame en Github como Gustavo Martin Alvarez</h1>} />
          <Route path="/about us" element={<h1 >Nuestra mision es...</h1>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
        <CartWidget cartCount={cartCount}/>
      </div>
    </BrowserRouter>
    </ProductProvider>

  
  );
}

export default App;
