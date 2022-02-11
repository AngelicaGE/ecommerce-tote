import React from 'react'

const ItemCount = ({amount, stock, onAdd, onRemove}) => {
  return (
    <div>
        <button disabled={amount<=1} onClick={()=>onRemove()}> - </button>
        <p>{amount}</p>
        <button disabled={amount>=stock} onClick={()=>onAdd()}> + </button>
    </div>
  )
}

export default ItemCount