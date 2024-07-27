import React, {useState} from 'react';

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);

  const updateName= () =>{
    setName("Gourab");
  }
  const updateAge= () =>{
    setAge(age+1);
  }
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age:{age}</p>
      <button onClick={updateAge}>Set Age</button>
    </div>
  );
 
}

export default MyComponent
