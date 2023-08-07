import products from '../../products.json'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {

    const categories = products.categorias.map((categoria)=>categoria.nombre);

    return (
        <div className='categories-container'>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '36px' }}>
            {categories.map((categorie) => (
              <Button
                key={categorie}
                sx={{ color: 'white', display: 'block', margin: '0px 20px' }}
                component={Link}
                to={`/${categorie}`}
                className="categories-button"
              >
                {categorie}
              </Button>
              
            ))}
          </Box>
        </div>
    )
}

export default Categories;