import React, { useState, useEffect, useContext } from 'react'
import '../styles/Cart.scss'
import { CartContext } from '../context/CartContext'
import {NavLink } from 'react-router-dom'
import CartProduct from '../containers/CartProduct'
import {completePurchase} from '../helpers/promises.js'

const Cart = () => {
    const {cartItems, removeCartItem, clearCart, updateCartItem} = useContext(CartContext)
    const [modalStyle, setModalStyle] = useState("hide")
    const [orderdata, setorderdata] = useState({fname:'', fLastName:'', femail:'', total: 'NA', totalItems: ''})
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [orderNumber, setOrderNumber] = useState();
    const [total, setTotal] = useState()


    console.log("***** CART ITEMS ******")
    console.log(cartItems)

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
        completePurchase.then((result) =>{
            setOrderNumber(result)
            console.log(result);
        }).catch(()=>{
            console.log("error");
        }).finally(()=>{
            console.log("finally")
            setOrderCompleted(true)
        })
    }

    const handleCloseConfirmation = () =>{
        clearCart()
        setModalStyle("hide");
    }

    const handleOpenModal = () => {
        console.log("handleOpenModal");
        setModalStyle("show")
    }

    const handleCloseModal = () => {
        console.log("handleCloseModal");
        setModalStyle("hide")
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
            <div><p>{orderdata.totalItems} books</p></div>
            <div><p>Free delivery</p></div>
        </div>
        <div className='btns-cont'>
            <NavLink to="/" className='btn-shop cart-btn'> Continue shopping </NavLink>
            <button className='btn-clear cart-btn' onClick={() => handleClickClear()}> Clear cart </button>
            <button onClick={() => handleOpenModal()} className='btn-complete cart-btn'> Complete order </button>
        </div>



        {/**** MODAL****/}
        {/**** MODAL DISPLAY FUNCTIONALITY BASED ON W3S CODE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal ****/}
        <div id="myModal" className={`modal ${modalStyle}`}>
            <div className="modal-content">
                {
                    !orderCompleted?
                    <div className='closebtn'>
                        <span onClick={()=>handleCloseModal()} className="close">&times;</span>
                    </div>: ''
                }
                <div className='form'>
                    <p>Almost done</p>
                    <p className='instructions'>Please fill in all the fields</p>
                    <br />
                    <hr />
                    <div className='form-group'>
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" onChange={(event)=>handleUserInput(event)} disabled={orderCompleted}/>
                    </div>
                    <div className='form-group'>
                        <label for="flastname">Last name:</label>
                        <input type="text" id="fLastName" name="fLastName" onChange={(event)=>handleUserInput(event)} disabled={orderCompleted}/>
                    </div>
                    <div className='form-group'>
                        <label for="femail">Email:</label>
                        <input type="email" id="femail" name="femail" onChange={(event)=>handleUserInput(event)} disabled={orderCompleted}/>
                    </div>
                    {
                        !orderCompleted?
                        <div className='form-complete'>
                            <button className='cart-btn btn-complete' type="submit" onClick={(event)=>handleOnComplete(event)}>Complete purchase</button>
                        </div>: ''
                    }
                </div>
                {
                    orderCompleted?
                    <div className='message-complete'>
                        <div className='message'>
                            <p>Congratulations you have completed your order. Please take note of your purchase order: <strong>{orderNumber} </strong> 
                            <br/> Happy reading :)</p>
                        </div>
                        <div className='form-complete'>
                            <button id='btn-complete' className='cart-btn btn-complete' onClick={()=> handleCloseConfirmation()}>Close</button>
                        </div>
                    </div>: ''
                }
            </div>
        </div>
    </div>
    )
} 

export default Cart