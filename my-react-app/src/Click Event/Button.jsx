import React from 'react'

function Button() {
 
  const handleClick = () =>{
    console.log("OUCH!");
  }
  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me`);
  }

  return (
    <button onClick={()=> handleClick2("Bro")}>Click me</button>
  )
}

export default Button;
