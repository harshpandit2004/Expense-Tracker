import React, { useState } from "react";
import ExpenseList from "./Components/Expense_Project/List/ExpenseList";
import NewExpenses from "./Components/Expense_Project/Add Expenses/NewExpenses";

const DummyValues = [
  {
    date: "31.1.22",
    reason: "Protien Intake",
    expense: 720,
  },
  {
    date: "22.33.33",
    reason: "Miscellaneous",
    expense: 550,
  },
  {
    date: "22.33.33",
    reason: "Playstation",
    expense: 550,
  },
  {
    date: "22.33.33",
    reason: "Internet Recharge",
    expense: 550,
  },
];

function App() {
  const[values, addValue] = useState(DummyValues);

  const addExpenseHandler = (expense) => {
    addValue(prevExpenses => {
      return [expense, ...values]})
  };


  return (
    <div>
      <div className="header">
        <h1>Yea, im doing the maxmillan project</h1>
        <NewExpenses onAddExpense={addExpenseHandler} />
      </div>
      <br />
      <br />
      <ExpenseList  values = {values}/>
    </div>
  );
}

export default App;
/*
  const date = "31.1.22";
  const reason = "Something";
  const expense = "about yay big";
*/
