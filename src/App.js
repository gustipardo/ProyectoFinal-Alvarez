import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import CartWidget from './components/CartWidget/CartWidget';
import Products from './components/Products/Products';



function App() {
    const links2 = {
      React: 'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg',
      JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      HtmlCss: 'https://devskiller.com/wp-content/uploads/2020/09/screen-html5-devs.jpg'
    }

  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products/:category?" element={<Products />} />
        </Routes>
        <CartWidget />
      </div>
    </BrowserRouter>

  
  );
}

export default App;
