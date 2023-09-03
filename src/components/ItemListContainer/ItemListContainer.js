import React, { useEffect, useState } from 'react';
import { useParams, Link  } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'; 
import AddIcon from '@mui/icons-material/Add';
import { getAuthUserUid } from '../googleSingin/firebase';
import addProductToCart from '../CartWidget/AddCart';


const ItemListContainer = ({ products }) => {
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    getAuthUserUid()
      .then((uid) => {
        if (uid) {
          console.log(`UID del usuario autenticado: ${uid}`);
          setUserUid(uid);
        } else {
          console.log('No hay usuario autenticado');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el UID del usuario:', error);
      });
  }, []);


    
    const { category } = useParams();

    const filterProductsByCategory = (productos, categoria) => {
      return productos.filter((producto) =>
        producto.categoria.toLowerCase() === categoria.toLowerCase()
      );
    };
  
    const filteredProducts = category
      ? filterProductsByCategory(products, category)
      : products;

  return (
    <div>
      <div className="card-grid">
        {filteredProducts.map((product) => (
          <Card className="card" sx={{ maxWidth: 260 }} key={product.id}>
            <CardMedia
                sx={{
                  height: 140,
                  width: '100%',
                  paddingTop: '56.25%',
                  position: 'relative',
                  transition: 'transform 5s'  
                }}
                image={product.imagen}
                title={product.nombre}
              >
                <img
                  src={product.imagen}
                  alt={product.nombre}
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
                {product.nombre}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to={`/product/${product.id}`} className="more-info-link">More Info</Link></Button>
              
              
              <Button
  onClick={() => addProductToCart(userUid, product.id)}
  size="small"
>
  Add to Cart
</Button>

            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
