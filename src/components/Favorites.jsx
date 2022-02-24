import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage";

const key = `likes`;

const Favorites = () => {
  const [likes, setLikes] = useLocalStorage(key, []);

  return (
    <div className='Favorites'>
      <h1>products in wishlist</h1><br /><br />
        {
          likes.map((prod) =>(
            <h1>{prod}m</h1>
          ))
        }
    </div>
  )
}

export default Favorites