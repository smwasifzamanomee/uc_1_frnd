import React, { useEffect, useState } from 'react'

const DropDown = ({items}) => {
    console.log(items);
  
  return (

    <>
        <ul>
            {items?.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    </>
  )
}

export default DropDown