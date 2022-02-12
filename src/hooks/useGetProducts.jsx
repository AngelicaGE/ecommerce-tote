import {useEffect, useState} from 'react';

const useGetProducts =  (API) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect( async () => {
      try{
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        setProducts(data.items);
      }catch(error){
        //console.log(error)
        setError(`ERROR ${error.message}`)
      } finally{
        //console.log("finished consuming api GET BOOKS")
        setLoading(false);
      }
    }, []);
    
  return {products, loading, error};

};

export default useGetProducts;
