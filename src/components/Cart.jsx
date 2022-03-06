import React, { useState, useEffect, useContext } from 'react'
import '../styles/Cart.scss'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import {NavLink } from 'react-router-dom'
import CartProduct from '../containers/CartProduct'
import BuyModal from '../containers/BuyModal'
import {  onAuthStateChanged} from "firebase/auth";
import { auth} from '../firebase/firebase'
import LoadingElement from '../containers/LoadingElement';

const ordersDocument ="cart";

const Cart = () => {
    const {cartItems, removeCartItem, clearCart, updateCartItem} = useContext(CartContext)
    const {getAllForUser, removeFromUserCart, updateItemFromcart,clearUserCart} = useContext(UserContext)
    const [userCart, setUserCart] = useState([])
    const [total, setTotal] = useState()
    const [modalStyle, setModalStyle] = useState("hide")
    const [orderdata, setorderdata] = useState({fname:'', fLastName:'', femail:'', totalItems: ''})
    const [userId, setUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(isLoading)
        onAuthStateChanged(auth,  (userAuth) => {
            if(userAuth){
              setUserId(userAuth.uid)
              console.log("Getting orders from user " );
              setUserCartFromFirebase(userAuth.uid).then(()=>{
                  setTimeout(function () {
                    setIsLoading(false);
                }, 1000);
              });
            }else{
                setIsLoading(false)
            }
        })
    }, [])

    useEffect(() =>{
        console.log(isLoading)
        setAllTotals();
    }, [cartItems, userCart])

    const setAllTotals = () => {
        addAllPrices();
        addAllItems();
    }

    const setUserCartFromFirebase = async (userAuthId) =>{
        getAllForUser(ordersDocument, userAuthId).then((items) =>{
            console.log(items)
            if(items){
              setUserCart(items)
            }
        })
    }

    const addAllPrices = () => {
        console.log("addAllPrices")
        let totalTemp = 0;
        let array = userId? userCart: cartItems;
        for (let i = 0; i < array.length; i++) {
           totalTemp +=  userId? (array[i].item.amount * array[i].item.price): (array[i].amount * array[i].price);
        }
        totalTemp = Math.round(totalTemp * 100) / 100;
        console.log("total: $"+totalTemp);
        setTotal(totalTemp);
    }

    const addAllItems = () => {
        console.log("addAllItems")
        let countTemp = 0;
        let array = userId? userCart: cartItems;
        for (let i = 0; i < array.length; i++) {
            countTemp += userId? array[i].item.amount :array[i].amount;
        }
        console.log("total items: "+countTemp);
        setorderdata({...orderdata, totalItems: countTemp});
    }

    const handleClickOnRemove = (productId) =>{
        if(userId){
            removeFromUserCart(productId, userId).then(() =>{
                setUserCartFromFirebase(userId);
            });
        }else{
            removeCartItem(productId);
        }
    }

    const onUpdateAmountItem = (productId, amount ) =>{
        // update item amount in context cartItems
        if(userId){
            let item = userCart.find((prod) => prod.item.id === productId)
            function  search(el){
                return el.item.id === productId;
                }
            if(item){
                item.item.amount = amount;
                updateItemFromcart(item, userId)
            }
        }else{
            updateCartItem(productId, amount);
        }
        addAllPrices();
        addAllItems();    
    }

    const handleClickClear = () => {
        console.log("click clear")
        if(userId){
            clearUserCart(userId);
            setUserCart([]);
        }else{
            clearCart();
        }

    }
    const handleOpenModal = () => {
        console.log("handleOpenModal");
        setModalStyle("show")
    }
    // modal

    const handleCloseConfirmation = () =>{
        clearCart()
        setModalStyle("hide");
    }

    if (isLoading) {
        return (
          <div className='loading'>
            <LoadingElement></LoadingElement>
          </div>
        )
    } else if( (!userId && cartItems.length === 0) || (userId && userCart.length === 0)){
        return (<div className='CartEmpty'>
            <p className='oops'>Oops, your cart is empty at the moment.</p>
            <p className='quotes'>“The more that you read, the more things you will know. The more you learn, the more places you’ll go.” — Dr. Seuss :)</p>
            <NavLink to="/">Go explore</NavLink>
        </div>)
    }else {

    return (
    <div className='Cart '>
        <div className='cart-products'>
            <div className='cart-title'>
                <p>My future books</p>
            </div>
        {
            userId? 
                userCart.map((cartItem) => ( 
                <div key={cartItem.item.id}>
                    <CartProduct  
                        cartProduct={cartItem.item}
                        handleClickOnRemove={handleClickOnRemove}
                        onUpdateAmountItem={onUpdateAmountItem}
                    ></CartProduct>
                    <hr />
                </div>
            ))
            :
                cartItems.map((cartItem) => ( 
                <div key={cartItem.id}>
                    <CartProduct  
                        cartProduct={cartItem}
                        handleClickOnRemove={handleClickOnRemove}
                        onUpdateAmountItem={onUpdateAmountItem}
                    ></CartProduct>
                    <hr />
                </div>
            ))
        }
        </div>
        <div className='total-cont'>
            <div><p>TOTAL ${total} MXN</p></div>
            <div><p>{orderdata.totalItems} book{orderdata.totalItems>1?'s':''}</p></div>
            <div><p>Free delivery</p></div>
        </div>
        <div className='btns-cont'>
            <NavLink to="/" className='btn-shop cart-btn'> Continue shopping </NavLink>
            <button className='btn-clear cart-btn' onClick={() => handleClickClear()}> Clear cart </button>
            <button onClick={() => handleOpenModal()} className='btn-complete cart-btn'> Complete order </button>
        </div>

        {/**** MODAL****/}
        <BuyModal
                modalStyle={modalStyle} 
                handleCloseConfirmation={handleCloseConfirmation}
                products={userId? userCart: cartItems}
                orderdata={orderdata}
                setorderdata={setorderdata}
                setModalStyle={setModalStyle}
        ></BuyModal>
    </div>
    )
    }
} 

export default Cart