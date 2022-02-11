import React, { useState } from "react";

import "./ExpensesFilter.css";

class ExpensesFilter extends React.Component {
  state = {
    year: 2022
  }
  
  yearChanged= (event) => {
    this.setState({year: event.target.value})
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select onChange = {this.yearChanged} value={yearValue}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>    
    );
  }
}

export default ExpensesFilter;
//this'll be the child compnent of expenselist