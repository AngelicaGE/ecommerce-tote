import React, {useEffect, useState} from 'react';

const API = 'https://api.escuelajs.co/api/v1/products';
import axios from 'axios';

const useGetProducts = () => {
  const [products, setproducts] = useState([]);

  useEffect(async () => {
    const respose = await axios(API);
    setproducts(respose);
  }, []);

};

export default useGetProducts;
