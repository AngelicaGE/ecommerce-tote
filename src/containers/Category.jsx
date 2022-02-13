import React from 'react'
import '../styles/Category.scss'
const Category = ({category}) => {
  return (
    <div className='category-element'>
        {category}
    </div>
  )
}

export default Category