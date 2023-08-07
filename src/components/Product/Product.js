import { useParams } from 'react-router-dom';
import './Product.css';
import productsData from '../../products.json';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import theme from '../../theme';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Product({addToCart}) {
  const { productoId } = useParams();


  const getProductById = (id) => {
    for (const categoria of productsData.categorias) {
      const cursoEncontrado = categoria.cursos.find((curso) => curso.id == id);
      if (cursoEncontrado) {
        return cursoEncontrado;
      }
    }
    return null; 
  };
  console.log(productoId);
  
  console.log(typeof productoId);
  const product = getProductById(productoId);


  if (!product) {
    return <h1>Curso no encontrado</h1>;
  }

  return (
    <div className="product-info">
    <h1>Info de Producto</h1>
    <Grid  container spacing={2}>

        <Grid  item xs={4} md={4} lg={4}>
          <Card>
            <CardMedia component="img" height="auto" image={product.imagen} alt={product.nombre} />
          </Card>
        </Grid>


      <Grid  item xs={16} md={4} lg={4}>
        <Card style={{background: theme.palette.primary.main}}>
          <CardContent>
            <Typography variant="h5" component="div">
              {product.nombre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Descripción: {product.descripcion}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Precio: ${product.precio}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Usuarios: {product.usuarios}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Puntaje: {product.puntaje}/10
            </Typography>
            
            
            
          </CardContent>
          
          <Grid item xs={12}>
          <Button
            size="small"
            variant="outlined"
            color='primary'
            sx={{
              borderColor: 'black', 
              marginTop: '16px', 
              color: 'black',
              marginBottom: '20px'   
            }}
            startIcon={<AddIcon sx={{ transform: 'scale(0.8)' }} />} onClick={addToCart}
          >
            Add to Cart
          </Button>
        </Grid>

        </Card>
      </Grid>
    </Grid>
  </div>
  );
}

export default Product;
