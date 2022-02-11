import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [listVisiblity, setListVisiblity] = useState();

  const onAddExpense = (expenseData) => {
    const expenses = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenses);
    setListVisiblity(false);
  };

  
  const startListHandler = () => {
    setListVisiblity(true);
  };
  const stopListHandler = () => {
    setListVisiblity(false);
  };
  return (
    <div className="new-expense">
      {!listVisiblity && (
        <button onClick={startListHandler}>Add Expenses</button>
      )}
      {listVisiblity && (
        <ExpenseForm
          onCancel={stopListHandler}
          onSaveExpenseData={onAddExpense}
        />
      )}
      {/* onSaveExpenseData can be named anything else, its just a parameter */}
    </div>
  );
};

export default NewExpenses;
//this is a parent component for expenseform.js
