import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    //a mapped array outputs another array. Here we are taking out the amount 
    //from the transaction object and putting it in the amounts array. 
    //transactions is an array with objects at each element. 
    const amounts = transactions.map(transaction => transaction.amount);

    //reduce performs an action on each element of the array and reduces the array
    //to one value. Here we've basically added each element within the amount array. 
    //so we're adding the total of all the amounts we have in the app. and rounding to
    //2 decimal places with .toFixed(2)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(<div>
        <h4>Your Balance</h4>
    <h1>${total}</h1>
    </div>);
}

//export default Balance;