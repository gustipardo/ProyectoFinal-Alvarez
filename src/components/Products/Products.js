
import { Outlet } from 'react-router-dom';
import './Products.css';
import Categories from '../Categories/Categories';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useProductContext } from '../../context/ProductsContext';
const Products = () => {

    const products = useProductContext();
    return (
    <div>
        <Categories/>
        <ItemListContainer products={products}></ItemListContainer>
        <Outlet /> 
    </div>
    )
}

export default Products;