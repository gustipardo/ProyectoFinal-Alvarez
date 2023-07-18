import cart from './assets/shopping-cart2.png';
import './CartWidget.css';

const CartWidget = () =>{
    return(
        <div className='container d-flex align-items-end cart-container'>
            <img className='container-cart' src={cart} alt="cart-widget"/>
            <p className='container-p'>0</p>
        </div>
    )
}

export default CartWidget;