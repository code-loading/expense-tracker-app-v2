import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'

export const History = () => {
    //getting the array directly which is within GlobalContext
    //as opposed to having to do context.transactions
    const { transactions } = useContext(GlobalContext);

    
    return(<>
        <h3>History</h3>
        {/**Transactions tag below needs to be told which transaction to render through transaction={transaction}
         * which is being mapped through. and key={transaction.id} is because the list elements should have a unique
         * identifier
         */}
        <ul className="list">
            
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            
        </ul>
    </>);
}

//export default History;