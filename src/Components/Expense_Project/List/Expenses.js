import React, { useState } from "react";

import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesChart from "../int_main/ExpenseChart"
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function ExpenseList(props) {
  const [yearFilter, setYearFilter] = useState("2021");

  const yearHandler = (yearparameter) => {
    setYearFilter(yearparameter);
  };

  const filteredexpenses = props.values.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <li>
      <div>
        <div className="expenses">
          <ExpensesFilter
            defaultValue={yearFilter}
            onGettingValue={yearHandler}
          />
          <ExpensesChart expenses = {filteredexpenses}/>
          <ExpensesList items={filteredexpenses} />
          {/*Dumbass error to keep in mind: Length is spelt as 'LENGTH' and not 'LENTH' */}
        </div>
      </div>
    </li>
  );
}

export default ExpenseList;

//so this will be the parent component of expensesfilter
