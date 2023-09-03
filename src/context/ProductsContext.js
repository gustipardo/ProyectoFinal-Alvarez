import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from "../components/googleSingin/firebase";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};


export const ProductProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  const itemsCollectionRef = collection(db, "cursos"); 
  useEffect(() => {
    const getItemList = async () => {
      const data = await getDocs(itemsCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setItemList(filteredData);
    };
    getItemList();
  }, []);


  return (
    <ProductContext.Provider value={itemList}>
      {children}
    </ProductContext.Provider>
  );

};
