import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {

  const expense = [

    {title: 'Car Insurance', amount: 15000, date: new Date(2021, 10, 18)},
    {title: 'Tution Fee', amount: 7000, date: new Date(2021, 10, 17)},
    {title: 'EMI', amount: 9000, date: new Date(2021, 10, 16)},
    {title: 'Electricity Bill', amount: 3000, date: new Date(2021, 10, 15)},
    {title: 'Maintenance', amount: 4000, date: new Date(2021, 10, 14)},
  ]; 
      
  return (
    <div>
      <h1>Lets get started with App component!</h1>
      <Expenses items = {expense}/>
    </div>
  );
}

export default App;
