
import { Outlet } from 'react-router-dom';
import './Products.css';
import Categories from '../Categories/Categories';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const Products = () => {


    return (
    <div>
        <Categories/>
        <ItemListContainer></ItemListContainer>
        <Outlet /> 
    </div>
    )
}

export default Products;