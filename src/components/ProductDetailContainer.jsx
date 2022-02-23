import React, {useState, useEffect} from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from "react-router-dom";
import {collection, query, orderBy, doc, getDoc, getData,  getDocs, getFirestore} from "firebase/firestore"

const ProductDetailContainer = () => {
    //logic to grab item
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
      const db = getFirestore();
      const itemCollection = collection(db, "products")
      getDocs(itemCollection).then((prod)=> {
        console.log(prod.docs)
        let prodTemp = prod.docs.find(p => p.id == id)
        setProduct(prodTemp.data())
      }).finally(()=>{
        setLoading(false)
        console.log(product)
      })
    }, []);
    
  return (
  <div>
    <ProductDetail product={product}></ProductDetail> 
  </div>);
};

export default ProductDetailContainer;
