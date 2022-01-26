import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = () => {
    const API = 'https://api.escuelajs.co/api/v1/products';
    const [products, setproducts] = useState([]);

  useEffect( async () => {
    const respose = await axios(API);
    setproducts(respose.data);
  }, []);

  //const  getProducts = () => {return products};
  
  return products;

};

export default useGetProducts;
