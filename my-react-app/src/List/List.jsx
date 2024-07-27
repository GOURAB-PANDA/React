import React from 'react'

const fruits = [
     {
      id:1,
     name:"aple",
     calo:32
     },
     {
      id:2,
      name:"apl",
      calo:35
     },
     {
      id:3,
      name:"ap",
      calo:36
      },
      {
        id:4,
        name:"apple",
        calo:39
        },
    ];

function List() {
 

  const listItem = fruits.map(fruit => <li key=   {fruit.id}>
  {fruit.name}: &nbsp;{fruit.calo}</li>)

  return (<ol>{listItem}</ol>);
};

export default List
