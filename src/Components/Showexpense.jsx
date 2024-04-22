import React, { useContext } from 'react';
import {Context} from '../App';

const Showexpense = () => {
    const {expenseData}=useContext(Context);
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          {expenseData.length === 0 && <h1>Your List ➕</h1>}
          {expenseData.map((expense, index) => (
            <div key={index} style={{ display: "flex",alignItems:"center", flexDirection: "row", justifyContent: "space-around", fontSize: "22px", border: "2px solid white", width: "900px", gap: "20px", marginBottom: "10px",  marginTop:"1rem"}}>
              <span>Title: {expense.title}</span>
              <span>Price: {expense.price}</span>
            </div>
          ))}
        </div>
      );
}

export default Showexpense