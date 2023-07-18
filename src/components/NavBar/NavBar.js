import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/light.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand d-flex align-items-end">
                <img className='nav-img d-inline-block' src={logo}></img>
                <h3 className="nav-h3 d-inline-block">LoAprendi</h3>
            </div>
        <div className="nav-container">
            <CartWidget></CartWidget>
        </div>
    </nav>

    
    )
}

export default NavBar;