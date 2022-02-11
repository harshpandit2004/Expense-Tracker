import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];
  console.log("Value of the array in expense chart before the loop:");
  console.log(chartDataPoints);
  for (const expense of props.expenses) {
    console.log("Value of the array from the expense date after the loop:");
    console.log(expense);
    const expenseMonth = expense.date.getMonth();
    console.log("Value of the Month from the chart date:");
    console.log(chartDataPoints[expenseMonth].value);
    chartDataPoints[expenseMonth].value += props.expense;
    console.log("Value of the Month after addition:");
    console.log(chartDataPoints[expenseMonth].value);
    console.log("Value of the array in expense chart after the loop:");
    console.log(chartDataPoints);
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
