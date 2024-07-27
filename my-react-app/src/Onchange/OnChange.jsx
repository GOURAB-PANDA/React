import React, {useState} from 'react'

function OnChange() {
  const [name, setName] = useState("Guest");
  const [Quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

    function handleNameChange(event){
      setName(event.target.value);
    }
    function handleQuantityChange(event){
      setQuantity(event.target.value);
    }
    function handleCommentChange(event){
      setComment(event.target.value);
    }
    function handlePaymentChange(event){
      setPayment(event.target.value);
    }
    function handleShippingChange(event){
      setShipping(event.target.value);
    }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      
      <input value={Quantity} onChange={handleQuantityChange} type='number'/>
      <p>Quantity:{Quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery Instructiuon'>
      </textarea>
      <p>Comment : {comment}</p>
      
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Giftard">GiftCard</option>
      </select>
      <p>payment :   {payment}</p>
    </div>
  )
}

export default OnChange
