import React from 'react'
import ItemCount from '../containers/ProductCount';

const ProductSaleInfo = ({sale, stock, amount, addItem, removeItem, handleAddToCart}) => {
  return (
    <div className='ProductSaleInfo'>
             <div className='book-sale-group'>
            {
              (sale.saleability == "FOR_SALE")
              ?
                <>
                  <p>Price: </p>
                  <p> ${sale.listPrice.amount} {sale.listPrice.currencyCode}</p>
                </>
              : (sale.saleability == "FREE")
              ?
                <>
                  <p>Price: </p>
                  <p> FREE</p>
                </>
                :
                <p>Not for sale, sorry :/</p> 
              }
      </div>

      <div className='book-sale-group'> 
          {
              (sale.saleability == "FOR_SALE" && stock)
              ?
                <>
                  <p>Units in stock: </p>
                  <p> {stock}</p>
                </>  
              : (sale.saleability == "FREE")
              ?
                ''            
                :
                <p>Not for sale, sorry :/</p> 
              }
      </div>

          {
            (sale.saleability == "FOR_SALE" && stock)?
            <div className='book-sale-group'>
              <ItemCount className="ItemCount" amount={amount} stock={stock} onAdd={addItem} onRemove={removeItem}></ItemCount>
            </div> : ''
          }
          {
                (sale.saleability == "FOR_SALE")
                ?
                <>
                  <button className='sale-btn add-cart'onClick={()=>handleAddToCart()}> Add to cart </button>
                  <button className='sale-btn buy-now'> Buy it now </button>
                </>
                  : (sale.saleability == "FREE")
                ?
                  <a href={sale.buyLink} target="_blank">Get it now</a>
                :
                  <p>Not for sale, sorry :/</p> 
            }
    </div>
  )
}

export default ProductSaleInfo