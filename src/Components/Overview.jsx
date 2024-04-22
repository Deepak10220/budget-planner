import React, { useContext } from 'react';
import {Context} from '../App';

const Overview = () => {

    const {totalExpense}=useContext(Context);
    const budget=2000;
    
    return (
      <div style={{display:"flex", justifyContent:"space-between", fontSize:"24px", width:"1000px"}}>
        <div>Budget:{budget}</div>  
        <div>Remaining:{budget-totalExpense}</div>
        <div>Spent So far:{totalExpense}</div>
      </div>
  )
}

export default Overview