import React, { useState } from "react";
import ExpenseItem from "../int_main/ExpenseItem";
import ExpensesFilter from "../Filter/ExpensesFilter";
import "./Expenses.css";

function ExpenseList(props) {

  const [yearFilter, setYearFilter] = useState();

  const yearHandler = (yearparameter) => {
    setYearFilter(yearparameter);
  };

  let expenseList = props.values.map((values) => (
    <ExpenseItem
      date={values.date}
      reason={values.reason}
      expense={values.expense}
    />
    ))

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter defaultValue = {yearFilter} onGettingValue={yearHandler} />

        {expenseList}
      </div>
    </div>
  );
}

export default ExpenseList;

//so this will be the parent component of expensesfilter
