import {useEffect, useState} from 'react';

const useGetProduct =  (API) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect( async () => {
      try{
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setProduct(data);
      }catch(error){
        console.log(error)
        setError(`ERROR ${error.message}`)
      } finally{
        console.log("finished consuming api useGetProduct");
        setLoading(false);
      }
    }, []);
    
  return {product, loading, error};

};

export default useGetProduct;
