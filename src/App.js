import React, { useState } from "react";
import ExpenseList from "./Components/Expense_Project/List/Expenses";
import NewExpenses from "./Components/Expense_Project/Add Expenses/NewExpenses";

const DummyValues = [
  {
    id: "e1",
    date: new Date(2021, 7, 14),
    reason: "Protien Intake",
    expense: 720,
  },
  {
    id: "e2",
    date: new Date(2020, 7, 14),
    reason: "Miscellaneous",
    expense: 550,
  },
  {
    id: "e3",
    date: new Date(2021, 7, 14),
    reason: "Playstation",
    expense: 550,
  },
  {
    id: "e4",
    date: new Date(2021, 7, 15),
    reason: "Internet Recharge",
    expense: 550,
  },
];

function App() {
  const [values, addValue] = useState(DummyValues);

  const addExpenseHandler = (expense) => {
    console.log(expense);
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
      <ExpenseList values={values} />
    </div>
  );
}

export default App;
/*
  const date = "31.1.22";
  const reason = "Something";
  const expense = "about yay big";
*/
