import React from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpenses = (props) =>
{
    const onAddExpense = (expenseData) => {
        const expenses = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenses);
    }
    return(
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {onAddExpense} />
            {/* onSaveExpenseData can be named anything else, its just a parameter */}
        </div>
    )
}

export default NewExpenses;
//this is a parent component for expenseform.js