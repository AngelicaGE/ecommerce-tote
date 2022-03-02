import React, {useState} from 'react'
import '../styles/BuyModal.scss'
import {collection, addDoc} from "firebase/firestore"
import { db } from "../firebase/firebase";

const BuyModal = ({ modalStyle, handleCloseConfirmation, products, orderdata, setorderdata, setModalStyle}) => {

        const [orderCompleted, setOrderCompleted] = useState(false);
        const [orderNumber, setOrderNumber] = useState(null);

        const handleUserInput = (event)=>{
            const name = event.target.name;
            const value = event.target.value;
            let state = orderdata;
            state[name] = value;
            setorderdata(state);
          }
        
          const handleOnComplete = async () => {
              console.log(orderdata)
              console.log(products)
        
              if (orderdata.fname === ''|| orderdata.fLastName === '' || orderdata.femail === '') {
                  alert("Please fill out every input form")
                  return;
              }
              const order = {
                orderdata,
                products 
            }
        
            const docRef = await addDoc(collection(db, "orders"), order);
            console.log(docRef.id)
            setOrderNumber(docRef.id)
            setOrderCompleted(true)
          }


      
        const handleCloseModal = () => {
            console.log("handleCloseModal");
            setModalStyle("hide")
        }
        
  return (
    <div id="myModal" className={`BuyModal modal ${modalStyle}`}>
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
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" onChange={(event)=>handleUserInput(event)} disabled={orderCompleted}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="flastname">Last name:</label>
                    <input type="text" id="fLastName" name="fLastName" onChange={(event)=>handleUserInput(event)} disabled={orderCompleted}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="femail">Email:</label>
                    <input type="email" id="femail" name="femail" onChange={(event)=>handleUserInput(event)} disabled={orderCompleted}/>
                </div>
                {
                    !orderCompleted?
                    <div className='form-complete'>
                        <button className='cart-btn btn-complete' type="submit" onClick={()=>handleOnComplete()}>Complete purchase</button>
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
  )
}

export default BuyModal