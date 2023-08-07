import './CartWidget.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () =>{
    return(
        <div className='fixed-bottom-right'>
            <AddShoppingCartIcon sx={{transform: 'scale(1.6)', marginTop: '10px', textAlign: 'center' }}></AddShoppingCartIcon>
            <p className='container-p' color='primary1'>0</p>
        </div>
    )
}

export default CartWidget;