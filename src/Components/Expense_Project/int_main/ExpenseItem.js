import React from "react";
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css";
import "../Add Expenses/NewExpenses";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.reason}</h2>
        <div className="expense-item__price">{props.expense}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
