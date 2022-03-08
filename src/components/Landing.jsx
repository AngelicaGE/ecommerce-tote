import React from 'react'
import '../styles/Landing.scss'
import { allCategories } from '../helpers/promises'
import {Link, NavLink } from 'react-router-dom'

const Landing = () => {

  return (
    <div className='Landing'>
      <h2 className='pick-group-title rule'>Features categories</h2>

      {/**** CATEGORIES ****/}
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

    </div>
  )
}

export default Landing