import React from 'react'
import ProductsContainer from './ProductsContainer.jsx'
import { allCategories } from '../helpers/promises.js'
import { ScrollerTop } from '../containers/ScrollerTop.jsx'

const Landing = () => {

  return (
    <div className='Landing'>
        {
            allCategories.map(cat => (
                // TODO change better key
                <ProductsContainer key={`cat${cat}`} category={cat} maxResults={10}/>
            ))
        }
        <div>
          <ScrollerTop></ScrollerTop>
        </div>
    </div>
  )
}

export default Landing