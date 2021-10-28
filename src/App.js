import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [

  {title: 'Car Insurance', amount: 15000, date: new Date(2021,9, 18)},
  {title: 'Tution Fee', amount: 7000, date: new Date(2019, 6, 17)},
  {title: 'EMI', amount: 9000, date: new Date(2020, 10, 16)},
  {title: 'Electricity Bill', amount: 3000, date: new Date(2019, 9, 15)},
  {title: 'Maintenance', amount: 4000, date: new Date(2021, 2, 14)},
  {title: 'Electricity Bill', amount: 3000, date: new Date(2020, 4, 15)},
  {title: 'Maintenance', amount: 4000, date: new Date(2021, 5, 14)},
]; 

function App() {

  const [expense, setExpense] = useState(DUMMY_EXPENSE);
      
  const addExpensehandler = expense => {
    setExpense(prevExpense => {
      return  [expense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses items = {expense}/>
    </div>
  );
}

export default App;
