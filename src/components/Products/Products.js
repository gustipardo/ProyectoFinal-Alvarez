
import { Outlet } from 'react-router-dom';
import './Products.css';
import Categories from '../Categories/Categories';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const Products = ({addToCart}) => {


    return (
    <div>
        <Categories/>
        <ItemListContainer addToCart={addToCart}></ItemListContainer>
        <Outlet /> 
    </div>
    )
}

export default Products;