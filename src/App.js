import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import CartWidget from './components/CartWidget/CartWidget';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import { useState } from 'react';



function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/:category?" element={<Products addToCart={addToCart}/>} />
          <Route path="/product/:productoId" element={<Product addToCart={addToCart}/>}/>
          <Route path="/contact us" element={<h1>Find us in our Github as Gustavo Martin Alvarez</h1>} />
          <Route path="/about us" element={<h1 >Our mission is...</h1>}/>
        </Routes>
        <CartWidget cartCount={cartCount}/>
      </div>
    </BrowserRouter>

  
  );
}

export default App;
