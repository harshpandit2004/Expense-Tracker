import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  //title
  const [enteredTitle, setEnteredTitle] = useState("");
  const textHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //amount
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //date
  const [enteredDate, setEnteredDate] = useState("");
  const dateHandler = (event) =>
  {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      reason: enteredTitle,
      expense: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  

  return (
    
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={textHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange = {dateHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type = "button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  
  );
};

export default ExpenseForm;
//this will be funny and also, child component for newexpenses.js