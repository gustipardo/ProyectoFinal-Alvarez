import React from 'react';
import { Navigate, useParams, useNavigate, Link  } from 'react-router-dom';
import productsData from '../../products.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'; 
import AddIcon from '@mui/icons-material/Add';

const ItemListContainer = ({addToCart}) => {
  const { category } = useParams();

  const getProductListByCategory = (categoryName) => {
    const selectedCategory = productsData.categorias.find(
      (cat) => cat.nombre.toLowerCase() === categoryName.toLowerCase()
    );
    return selectedCategory ? selectedCategory.cursos : [];
  };

  const handleMoreInfoClick = (productId) => {
    console.log("click");
    Navigate(`/${category}/${productId}`); 
  };

  const productList = category ? getProductListByCategory(category) : productsData.categorias.flatMap((cat) => cat.cursos);

  return (
    <div>
      <div className="card-grid">
        {productList.map((curso) => (
          <Card className="card" sx={{ maxWidth: 260 }} key={curso.id}>
            <CardMedia
                sx={{
                  height: 140,
                  width: '100%',
                  paddingTop: '56.25%',
                  position: 'relative',
                  transition: 'transform 5s'  
                }}
                image={curso.imagen}
                title={curso.nombre}
              >
                <img
                  src={curso.imagen}
                  alt={curso.nombre}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 5s'   
                  }}
                />
              </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {curso.nombre}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to={`/product/${curso.id}`} className="more-info-link">More Info</Link></Button>
              
              
              <Button onClick={addToCart} size="small">Add to Cart <AddIcon sx={{margin: '0px -2px', transform: 'scale(0.8)'}}/></Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
