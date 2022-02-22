import React from 'react'
import '../styles/BuyModal.scss'

const BuyModal = ({
    modalStyle, orderCompleted, handleCloseModal, 
    handleUserInput, handleOnComplete, handleCloseConfirmation, orderNumber="12345"}) => {
        
  return (
    <div id="myModal" className={`BuyModal modal ${modalStyle}`}>
    {/**** MODAL DISPLAY FUNCTIONALITY BASED ON W3S CODE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal ****/}
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
  )
}

export default BuyModal