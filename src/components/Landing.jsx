import React from 'react'
import ProductsContainer from './ProductsContainer.jsx'
import { allCategories } from '../helpers/promises.js'

const Landing = () => {
  return (
    <div>
        {
            allCategories.map(cat => (
                // TODO change better key
                <ProductsContainer key={`cat${cat}`} category={cat} maxResults={10}/>
            ))
        }
    </div>
  )
}

export default Landing