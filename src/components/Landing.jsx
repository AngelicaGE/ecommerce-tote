import React from 'react'
import '../styles/Landing.scss'
import { allCategories, allCards } from '../helpers/promises'
import {Link } from 'react-router-dom'
import searchIcon from '../assets/icons/search-white-24.png'

const Landing = () => {

  return (
    <div className='Landing'>
      {/**** BANNER ****/}
      <div className='banner-cont'>
        <div className='banner-cont-watermark'>
          <div className='banner-text'>
            <p>A writter only begins a book, <br /> a reader finishes it.</p>
          </div>
        </div>
      </div>

      {/**** CATEGORIES ****/}
      <h2 className='pick-group-title rule'>Features categories</h2>
      <div className='categories-cont'>
        {
          allCategories.map((catElem) =>(
            <Link  to={`/category/${catElem.category}`} key={catElem.category} className="category-element">
              <p>{catElem.title}</p>
              <img src={`images/${catElem.image}`} alt="category image" width={200} height={250} />
            </Link>
          ))
        }
      </div>

      {/**** SMALL CARDS ****/}
      <hr />
      <div className='cards-cont'>
        {
          allCards.map(card =>(
            <div className='card-item' key={card.title}>
              <img src={`images/${card.icon}`} alt={`icon ${card.title}`} />
              <h2>{card.title}</h2>
              <p>{card.caption}</p>
            </div>
          ))
        }

      </div>


    </div>
  )
}

export default Landing