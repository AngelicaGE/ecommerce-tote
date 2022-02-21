import React, { useState, useEffect, useContext } from 'react'
import '../styles/Cart.scss'
import { CartContext } from '../context/CartContext'
import {NavLink } from 'react-router-dom'
import CartProduct from '../containers/CartProduct'
import BuyModal from '../containers/BuyModal'

const Cart = () => {
    const {cartItems, removeCartItem, clearCart, updateCartItem} = useContext(CartContext)
    const [total, setTotal] = useState()
    const [orderdata, setorderdata] = useState({fname:'', fLastName:'', femail:'', totalItems: ''})
    const [modalStyle, setModalStyle] = useState("hide")
    const [orderCompleted, setOrderCompleted] = useState(false);


    useEffect(() => {
        //TODO. why is this not getting called after onUpdateAmountItem is called?
        console.log("use effect")
        addAllPrices();
        addAllItems();
        console.log(orderdata)
    }, [cartItems])

    const addAllPrices = () => {
        console.log("addAllPrices")
        let totalTemp = 0;
        for (let i = 0; i < cartItems.length; i++) {
           totalTemp += (cartItems[i].amount * cartItems[i].price);
        }
        totalTemp = Math.round(totalTemp * 100) / 100;
        console.log("total: $"+totalTemp);
        setTotal(totalTemp);
    }

    const addAllItems = () => {
        console.log("addAllItems")
        let countTemp = 0;
        for (let i = 0; i < cartItems.length; i++) {
            countTemp += cartItems[i].amount;
        }
        console.log("total items: "+countTemp);
        setorderdata({...orderdata, totalItems: countTemp});
    }

    const handleClickOnRemove = (productId) =>{
        removeCartItem(productId);
    }

    const onUpdateAmountItem = (productId, amount ) =>{
        // update item amount in context cartItems
        updateCartItem(productId, amount);
        addAllPrices();
        addAllItems();    
    }

    const handleClickClear = () => {
        console.log("click clear")
        clearCart()
    }

    const handleUserInput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        let state = orderdata;
        state[name] = value;
        setorderdata(state);
    }

    const handleOnComplete = (event) => {
        console.log(orderdata)
        let validForm = true;
        if (orderdata.fname == ''|| orderdata.flstname == '' || orderdata.femail == '') {
            alert("Please fill out every input form")
            return;
        }
        setOrderCompleted(true)
    }

    const handleOpenModal = () => {
        console.log("handleOpenModal");
        setModalStyle("show")
    }

    const handleCloseModal = () => {
        console.log("handleCloseModal");
        setModalStyle("hide")
    }

    const handleCloseConfirmation = () =>{
        clearCart()
        setModalStyle("hide");
    }

    if(cartItems.length == 0){
        return (<div className='CartEmpty'>
            <p className='oops'>Oops, your cart is empty at the moment.</p>
            <p className='quotes'>“The more that you read, the more things you will know. The more you learn, the more places you’ll go.” — Dr. Seuss :)</p>
            <NavLink to="/">Go explore</NavLink>
        </div>)
    }

    return (
    <div className='Cart '>
        <div className='cart-products'>
            <div className='cart-title'>
                <p>My future books</p>
            </div>
        {
            cartItems.map((cartItem) => ( 
                <>
                    <CartProduct  
                        key={cartItem.id}
                        cartProduct={cartItem}
                        handleClickOnRemove={handleClickOnRemove}
                        onUpdateAmountItem={onUpdateAmountItem}
                    ></CartProduct>
                    <hr />
                </>
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
                modalStyle={modalStyle} orderCompleted={orderCompleted} 
                handleCloseModal={handleCloseModal} handleUserInput={handleUserInput} 
                handleOnComplete={handleOnComplete} handleCloseConfirmation={handleCloseConfirmation}
        ></BuyModal>
    </div>
    )
} 

export default Cart