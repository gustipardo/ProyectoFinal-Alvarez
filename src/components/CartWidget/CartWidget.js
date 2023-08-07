import './CartWidget.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = ({cartCount}) =>{
    return(
        <div className='fixed-bottom-right'>
            <AddShoppingCartIcon sx={{transform: 'scale(1.6)', marginTop: '10px', textAlign: 'center', color:'black'}}></AddShoppingCartIcon>
            <p className='container-p' color='primary1'>{cartCount}</p>
        </div>
    )
}

export default CartWidget;