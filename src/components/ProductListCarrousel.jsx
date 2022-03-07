//rafce
import React, {useState, useEffect} from "react";
import Product from "../containers/Product";
import "../styles/ProductListCarrousel.scss";
import LoadingElement from '../containers/LoadingElement'
import arrow from '../assets/icons/arrow-up.png'

const ProductListCarrousel = ({ products, loading, amountVisibleParameter=3}) => {
    const [visibleItems, setVisibleItems] = useState([])
    const [amountVisible, setAmountVisible] = useState(amountVisibleParameter)
    const [firstVisibleIndex, setFirstVisibleIndex] = useState(0)
    

    useEffect(() => {
        console.log("useEffect", window.screen.width)
        
        if(window.screen.width<=600){
            setAmountVisible(2);
        }
        console.log(products)
        setVisibleItems(products.slice(firstVisibleIndex, firstVisibleIndex+amountVisible))
    }, [products])
    
    
    const handleNextBooks = ()=>{
        console.log("next")
        const newFirstVisibleIndex = firstVisibleIndex+amountVisible;
        if(newFirstVisibleIndex >= products.length)return;
        setFirstVisibleIndex(newFirstVisibleIndex)
        const newVisibleItems = products.slice(newFirstVisibleIndex, newFirstVisibleIndex+amountVisible)
        setVisibleItems(newVisibleItems)
        console.log(newFirstVisibleIndex)
        console.log(newVisibleItems)

      }
      const handlePrevBooks = ()=>{
        console.log("prev")
        const newFirstVisibleIndex = firstVisibleIndex-amountVisible;
        if(newFirstVisibleIndex < 0) return;
        setFirstVisibleIndex(newFirstVisibleIndex)
        const newVisibleItems = products.slice(newFirstVisibleIndex, newFirstVisibleIndex+amountVisible)
        setVisibleItems(newVisibleItems)
        console.log(newFirstVisibleIndex)
        console.log(newVisibleItems)
      }

      if(loading){
          return <LoadingElement></LoadingElement>
      }

    return (
    <div className="ProductListCarrousel">
        <div className="arrow">
        <img id="left-arrow" src={arrow} alt="right arrow" 
        onClick={()=>handlePrevBooks()} 
        className={`${(firstVisibleIndex-amountVisible) < 0? 'hide-visibility':'show'}`}/>
        </div>
        {visibleItems.map((product) => (
            <div className="Product" key={product.id}>
                <Product
                id={product.id}
                name={product.volumeInfo.title}
                saleability={product.saleInfo.saleability}
                price={product.saleInfo.listPrice}
                imagePath={product.volumeInfo.imageLinks}
                freeLink={product.saleInfo.buyLink}
                displayButton={false}
                ></Product>
            </div>

        ))}
        <div className="arrow">
        <img id="right-arrow" src={arrow} alt="right arrow" 
        onClick={()=>handleNextBooks()} 
        className={`${(firstVisibleIndex+amountVisible) >= products.length? 'hide-visibility':'show'}`}/> 
        </div>
    </div>
  );
};

export default ProductListCarrousel;
