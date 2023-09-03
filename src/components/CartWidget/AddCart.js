import { db } from '../googleSingin/firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, increment } from 'firebase/firestore';

const addProductToCart = async (userId, productId) => {
  try {

    const userCartRef = doc(db, 'Carritos', userId);

    const userCartSnapshot = await getDoc(userCartRef);

    if (userCartSnapshot.exists()) {
      const userData = userCartSnapshot.data();
      const currentQuantity = userData.productos[productId] || 0;

      await updateDoc(userCartRef, {
        [`productos.${productId}`]: increment(1),
      });
    } else {
      await setDoc(userCartRef, {
        productos: {
          [productId]: 1,
        },
      });
    }

    console.log('Producto agregado al carrito con éxito.');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
  }
};

export default addProductToCart;
