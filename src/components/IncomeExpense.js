import React, { useContext } from "react";
import '../App.css';
//import './IncomeExpense.css';
import { GlobalContext } from '../context/GlobalState';

//Issues: Income and Expense vales aren't showing in red/green

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    //putting amount from transactions into our own amounts array,
    //same thing as we did in Balance as well. 
    const amounts = transactions.map(transaction => transaction.amount);

    //Note this format for writing default functions of array
    //.filter .reduce .toFixed
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    //Note this format similar to above but the default array funcions have been written
    //inside the brackets this time and .toFixed is outside the bracket. 
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0)*-1
    ).toFixed(2)
    return(
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
    <p className="money plus">+${income}</p>
        </div>

        <div>
            <h4>Expense</h4>
            <p className="money minus">-${expense}</p>
        </div>
        
    </div>);
}

//export default IncomeExpense;