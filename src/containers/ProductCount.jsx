import React from 'react'
import '../styles/ProductCount.scss'

const ItemCount = ({amount, stock, onAdd, onRemove}) => {
  return (
    <div className='ItemCount'>
        <button disabled={amount<=1} onClick={()=>onRemove()}> - </button>
        <p>{amount}</p>
        <button disabled={amount>=stock} onClick={()=>onAdd()}> + </button>
    </div>
  )
}

export default ItemCount