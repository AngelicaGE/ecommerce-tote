import {useEffect, useState} from 'react';

const useGetProducts =  (API) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect( async () => {
      try{
        const response = await fetch(API);
        const data = await response.json();
        setProducts(data);
      }catch(error){
        setError(`ERROR ${error.message}`)
      } finally{
        setLoading(false);
      }
    }, []);
    
  return {products, loading, error};

};

export default useGetProducts;
