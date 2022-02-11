import React from "react";
import ExpenseItem from "../int_main/ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((values) => (
        <ExpenseItem
          key={values.id}
          date={values.date}
          reason={values.reason}
          expense={values.expense}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
