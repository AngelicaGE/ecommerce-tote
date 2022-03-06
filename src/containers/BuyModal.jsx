import React, { useState, useEffect, useContext } from "react";
import "../styles/BuyModal.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";


const formUser = [
  {
    label: "Name",
    name: "fname",
    type: "text"
  },
  {
    label: "Last Name",
    name: "flastName",
    type: "text"
  },
  {
    label: "Email",
    name: "femail",
    type: "email"
  },
  {
    label: "Confirm Email",
    name: "fconfirmEmail",
    type: "email"
  },
];
const inputsUser = {
    fname: "",
    flastName: "",
    femail: "",
    fconfirmEmail: ""
}


const BuyModal = ({
  modalStyle,
  products,
  setModalStyle,
}) => {
  const [formFields, setFormFields] = useState([]);
  const [formFieldsInputs, setFormFieldsInputs] = useState([]);
  const {userId, user, clearUserCart} = useContext(UserContext)
  const { clearCart} = useContext(CartContext)

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState("Please fill out every input form")

  useEffect(() => {
        setFormFields(formUser)
        setFormFieldsInputs(formFieldsInputs)
        if(userId && user){
            formFieldsInputs.femail = user.email;
            formFieldsInputs.fconfirmEmail = user.email;
            formFieldsInputs.fname = user.displayName.split(" ")[0];
            formFieldsInputs.flastName = user.displayName.split(" ")[1];
        }
    }, [user])

  const validateForm = () =>{
    console.log(formFieldsInputs)
    let isValid = true
    console.log(formFieldsInputs.fconfirmEmail)
    if((formFieldsInputs.fconfirmEmail)  && (formFieldsInputs.femail !== formFieldsInputs.fconfirmEmail)){
        console.log(formFieldsInputs)    
        isValid = false;
        setErrorMessage("Email confirmation must match")
    }

    Object.entries(formFieldsInputs).forEach(([key, value]) => {
        if(value === ""){
            console.log(value)
             isValid = false;
        }
    })
    return isValid
  }

  const handleOnComplete = async () => {
    let formIsValid = validateForm();
    if (!formIsValid) {
      alert(errorMessage);
      return;
    }
    let order = {
        orderdata: formFieldsInputs,
        products,
        useruid:userId
    };
    if(userId){
        order = {...order,useruid:userId };
    }

    const docRef = await addDoc(collection(db, "orders"), order);
    console.log(docRef.id);
    setOrderNumber(docRef.id);
    setOrderCompleted(true);
    setFormFieldsInputs(inputsUser)
    if(userId){
        clearUserCart(userId)
    }else{
        clearCart();
    }
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal");
    setModalStyle("hide");
    setFormFieldsInputs(inputsUser)
  };

  let navigate = useNavigate();
  const handleCloseConfirmation = () => {
    setModalStyle("hide");
    navigate("/");
    setFormFieldsInputs(inputsUser)
  };

  const onChange = (event) => {
      console.log(formFieldsInputs)
    setFormFieldsInputs({ ...formFieldsInputs, [event.target.name]: event.target.value });
  };

  return (
    <div id="myModal" className={`BuyModal modal ${modalStyle}`}>
      <div className="modal-content">
        {!orderCompleted ? (
          <div className="closebtn">
            <span onClick={() => handleCloseModal()} className="close">
              &times;
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="form">
          <p>Almost done</p>
          <p className="instructions">Please fill in all the fields</p>
          <br />
          <hr />
          {formFields.map((input) => (
            <div key={input.name} className="form-group">
              <label htmlFor={input.name}>{input.label}</label>
              <input
                type={input.type}
                value={formFieldsInputs[input.name]? formFieldsInputs[input.name]: ''}
                onChange={onChange}
                name={input.name}
              />
            </div>
          ))}
          {!orderCompleted ? (
            <div className="form-complete">
              <button
                className="cart-btn btn-complete"
                type="submit"
                onClick={() => handleOnComplete()}
              >
                Complete purchase
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {orderCompleted ? (
          <div className="message-complete">
            <div className="message">
              <p>
                Congratulations you have completed your order. Please take note
                of your purchase order: <strong>{orderNumber} </strong>
                <br /> Happy reading :)
              </p>
            </div>
            <div className="form-complete">
              <button
                id="btn-complete"
                className="cart-btn btn-complete"
                onClick={() => handleCloseConfirmation()}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BuyModal;
