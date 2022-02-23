import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import { useParams } from "react-router-dom";
import {Link, NavLink} from 'react-router-dom'
import {collection, query, orderBy, where, getDoc, getDocs, getFirestore} from "firebase/firestore"

const ProductsContainer = () => {
  const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      const db = getFirestore();
      let tmpArray = [];
      if (category) {
        console.log(category)
        const itemCollection = collection(db, "products");
        const q = query(itemCollection,where("category", "==", category))

        getDocs(q).then((snapshot) => {
          console.log(snapshot)
            snapshot.docs.map(doc => {
              tmpArray = [...tmpArray, {"id": doc.id, ...doc.data()}];
            })
            console.log(tmpArray)
            setProducts(tmpArray)
        }).finally(()=>{
          setLoading(false)
          console.log(products)
        })
        
      }else{
        getDocs(query(collection(db, 'products'), orderBy('category'))).then((querySnapshot)=>{
          querySnapshot.forEach((doc) => {
            let isInArray = tmpArray.some(item => item.id === doc.id);
            if(!isInArray){
              tmpArray = [...tmpArray, {"id": doc.id, ...doc.data()}];
            }
          });
          console.log(tmpArray)
        }).catch((error) =>{
          console.log(error)
        }).finally( () =>{
            setProducts(tmpArray)
            setLoading(false)
          }
        )
      }

    }, [products]);

  return (
  <div>
      <div>{errorMessage}</div>
      <div className='categs'>
        <NavLink to="/category/Novel" style={{margin: '15px'}}>Novel</NavLink>
        <NavLink to="/category/Favorites" style={{margin: '15px'}}> Favorites</NavLink>
        <NavLink to="/category/Romance" style={{margin: '15px'}}>Romance</NavLink>
      </div>
      {
        (products.length == 0 && !loading) ? <div>No products available</div>
        : (loading) ? <div>Loading...</div>
        : <ProductList category={category} products={products}></ProductList>
      }
  </div>
  );
};

export default ProductsContainer;
