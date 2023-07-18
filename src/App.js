import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';




function App() {
    const links2 = {
      React: 'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg',
      JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      HtmlCss: 'https://devskiller.com/wp-content/uploads/2020/09/screen-html5-devs.jpg'
    }

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='container'>
      <ItemListContainer greeting={"Curso de React"} img={links2.React}></ItemListContainer>

      <ItemListContainer greeting={"Curso de JavaScript"} img={links2.JavaScript}></ItemListContainer>
      
      <ItemListContainer greeting={"Curso de HTML y CSS"} img={links2.HtmlCss}></ItemListContainer>
      </div>
    </div>
  
  );
}

export default App;
