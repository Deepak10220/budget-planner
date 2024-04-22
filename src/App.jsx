import { useState,createContext } from 'react'

import './App.css'
import Overview from './Components/Overview'
import Showexpense from './Components/Showexpense'
import Addexpense from './Components/Addexpense';

export const Context=createContext();

function App() {

  const [totalExpense, setTotalExpense] = useState(0);
  const [expenseData,setExpenseData]=useState([]);

 

  return (
  
  <div>
    <Context.Provider value={{totalExpense,setTotalExpense,expenseData,setExpenseData}}>
    <h1>Budget Planner</h1>
    <Overview/>
    <Showexpense/>
    <Addexpense/>
    </Context.Provider>
   
  </div>
  )
}

export default App
