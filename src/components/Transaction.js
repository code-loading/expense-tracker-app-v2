import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    //We used curly braces with deleteTransaction inside it {deleteTransaction} to destructure
    //and directly call the deleteTransaction component provided within the GlobalContext
    const { deleteTransaction } = useContext(GlobalContext);
    
    //don't put {sign} it's wrong, why though?
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        /**made the className dynamic so that positive values have className='plus' and green border
         * and negative values have className='minus' and red border
         */
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>

        /**transactions.map goes through each element of the array
        * and takes transaction as arg and displays each element of our transactions
        * array as a list item
        */

        
    );
}