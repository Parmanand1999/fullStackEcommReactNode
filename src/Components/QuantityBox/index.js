import { Button } from '@mui/material';
import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
const QuantityBox = () => {
    const [inputVal,setInputVal]=useState(0)


    const minus = () => {
        if(inputVal !==1&& inputVal>0){

            setInputVal((prev) => prev - 1);
        }
    };
    
    const plus = () => {
        setInputVal((prev) => prev + 1);
    };
  return (
    <div className="quantityDrop d-flex align-items-center">  
    <Button onClick={minus}><FaMinus/></Button>
    <input type="text" value={inputVal}/>
    <Button onClick={plus}><FaPlus/></Button>
    </div>
  )
}

export default QuantityBox