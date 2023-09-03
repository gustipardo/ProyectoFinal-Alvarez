import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css';
import { db, getAuthUserUid } from '../googleSingin/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useProductContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';
import SignIn from '../googleSingin/SignIn';

const CartWidget = ({ cartCount }) => {
  const [userUid, setUserUid] = useState(null);
  const [cartData, setCartData] = useState(null);
  const [cartArray, setCartArray] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOpenFlag, setDrawerOpenFlag] = useState(false);

  useEffect(() => {
    getAuthUserUid()
      .then((uid) => {
        if (uid) {
          setUserUid(uid);
        } else {
          console.log('No hay usuario autenticado');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el UID del usuario:', error);
      });
  }, []);

  const fetchCartData = async (userId) => {
    try {
      const userCartRef = doc(db, 'Carritos', userId);
      const userCartSnapshot = await getDoc(userCartRef);

      if (userCartSnapshot.exists()) {
        setCartData(userCartSnapshot.data());
      } else {
        setCartData(null);
      }
    } catch (error) {
      console.error('Error al obtener el carrito del usuario:', error);
      setCartData(null);
    }
  };
  const loadCartDataOnOpen = () => {
    if (userUid) {
      fetchCartData(userUid);
    } else {
      setCartData(null);
    }
  };
  useEffect(() => {
    if (userUid) {
      fetchCartData(userUid);
    } else {
      setCartData(null);
    }
  }, [userUid]);


  const calcularTotal = () => {
    let total = 0;
    if (cartArray && cartArray.length > 0) {
      for (const cartItem of cartArray) {
        const product = products.find((p) => p.id === cartItem.id);
        if (product) {
          total += cartItem.cantidad * product.precio;
        }
      }
    }
    return total.toFixed(2);
  };
  

  useEffect(() => {
    if (cartData && cartData.productos) {
      const transformedCartArray = [];
      for (const productId in cartData.productos) {
        if (cartData.productos.hasOwnProperty(productId)) {
          transformedCartArray.push({
            id: productId,
            cantidad: cartData.productos[productId],
          });
        }
      }
      setCartArray(transformedCartArray);
    }
  }, [cartData]);
  const products = useProductContext();

  const handleRemoveItem = async (productId) => {
    try {
      const updatedCartData = { ...cartData };
      if (updatedCartData.productos[productId] > 0) {
        updatedCartData.productos[productId] -= 1; 
        setCartData(updatedCartData);

        const userCartRef = doc(db, 'Carritos', userUid);
        await setDoc(userCartRef, updatedCartData);

        if (updatedCartData.productos[productId] === 0) {
          delete updatedCartData.productos[productId];
        }
        const transformedCartArray = [];
        for (const productId in updatedCartData.productos) {
          if (updatedCartData.productos.hasOwnProperty(productId)) {
            transformedCartArray.push({
              id: productId,
              cantidad: updatedCartData.productos[productId],
            });
          }
        }
        setCartArray(transformedCartArray);
      }
      setDrawerOpenFlag(!drawerOpenFlag);
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };
  const toggleDrawer = (open) => async (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    if (open) {
      if (userUid) {
        try {
          const userCartRef = doc(db, 'Carritos', userUid);
          const userCartSnapshot = await getDoc(userCartRef);
  
          if (userCartSnapshot.exists()) {
            setCartData(userCartSnapshot.data());
          } else {
            setCartData(null);
          }
        } catch (error) {
          console.error('Error al obtener el carrito del usuario:', error);
          setCartData(null);
        }
      } else {
        setCartData(null);
      }
    }
  
    setIsDrawerOpen(open);
  };


  
  useEffect(() => {
    if (cartData && cartData.productos) {
      const transformedCartArray = [];
      for (const productId in cartData.productos) {
        if (cartData.productos.hasOwnProperty(productId)) {
          transformedCartArray.push({
            id: productId,
            cantidad: cartData.productos[productId],
          });
        }
      }
      setCartArray(transformedCartArray);
    }
  }, [cartData]);
  const filteredCartArray = cartArray.filter((cartItem) => cartItem.cantidad > 0);
  const calcularTotalProductos = () => {
    let total = 0;
    filteredCartArray.forEach((cartItem) => {
      total += cartItem.cantidad;
    });
    return total;
  };
  
  return (
    <div>
      <div className="fixed-bottom-right" onClick={toggleDrawer(true)}>
        <AddShoppingCartIcon
          className="cart-icon"
          sx={{
            transform: 'scale(1.6)',
            marginTop: '10px',
            textAlign: 'center',
            color: 'black',
          }}
        />
          <p className='container-p'>{calcularTotalProductos()}</p>

      </div>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          color: 'black',
        }}>
        <div className="drawer-content">
          <h2>Contenido del carrito</h2>

          {userUid ? null : <SignIn/>}

          <ul>
            {filteredCartArray.map((cartItem) => {
              const product = products.find((product) => product.id === cartItem.id);
  
              if (!product) {
                return null;
              }
  
              return (
                <li key={product.id} className="product-item">
                  <img src={product.imagen} alt={product.nombre} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">{product.nombre}</h3>
                    <p className="product-price">${product.precio}</p>
                    <p className="product-quantity">Cantidad: {cartItem.cantidad}</p>
                    <button
                      onClick={() => handleRemoveItem(product.id)}
                      className="remove-button"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="total-p">Total a pagar: ${calcularTotal()}</p>
        <Link to="/checkout">
          <button
            className="checkout-button"
            onClick={toggleDrawer(false)}
            disabled={filteredCartArray.length === 0} 
          >
            Checkout
          </button>
        </Link>
      </Drawer>
    </div>
  );
  
};

export default CartWidget;