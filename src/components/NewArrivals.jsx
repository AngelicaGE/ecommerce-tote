import React, {useState} from 'react'
import '../styles/NewArrivals.scss'
import ProductsContainer from './ProductsContainer.jsx'
import { ourPicks } from '../helpers/promises.js'
import { ScrollerTop } from '../containers/ScrollerTop.jsx'

const NewArrivals = () => {

  return (
    <div className="NewArrivals">
      <div className='pick-group'>
        <h2 className='pick-group-title rule'>Our Picks</h2>
        <div className='pick-group-double'>
          <div className='pick-group-description'>
            <p><strong> The best rated by our readers</strong></p>
            <p>We have carefully picked a handfull of great authors and stories that we garantee to bring great entertainment from start to finish.</p>
          </div>
          <div className='pick-group-books'>
            <ProductsContainer key={`cat`} category="" maxResults={15} 
                      startIndex={1} seeAll={false} createTitle={false} />
          </div>
        </div>
      </div>
        {
            ourPicks.map(pick => (
              <div key={`cat${pick.category}`} className='pick-group'>
                <h2 className='pick-group-title rule'>{pick.message}</h2>
                <ProductsContainer category={pick.category} maxResults={15} startIndex={1} seeAll={true} createTitle={false} amountVisibleParameter={5}/>
              </div>
              
            ))
        }
        <div>
          <ScrollerTop></ScrollerTop>
        </div>
    </div>
    )
}

export default NewArrivals