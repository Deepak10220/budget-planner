import React,{useRef,useContext} from 'react';
import {Context} from '../App';

const Addexpense = () => {
 
    const {setExpenseData,setTotalExpense}=useContext(Context);

    const titleRef=useRef();
    const priceRef=useRef();
    
      return (
        <div>
            <input ref={titleRef} type="text" placeholder='Enter the Goods' style={{padding:"10px 20px", margin:"1rem"}} />
            <input ref={priceRef} type="number" placeholder='Enter the cost'  style={{padding:"10px 20px", margin:"1rem"}}  />
            <button  onClick={()=>{
                const title=titleRef.current.value;
                const price=parseInt(priceRef.current.value);
                setExpenseData(prevDta=>[...prevDta,{title,price}]);
                setTotalExpense(prevValue=>price+prevValue)
                titleRef.current.value="";
                priceRef.current.value="";
    
            }}>Add</button>
        </div>
      )
}

export default Addexpense