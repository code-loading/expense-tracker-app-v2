import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionForm = () => {
    
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        
    }

    return(<>
        <h3>Add new transactions</h3>
        <form onSubmit={onSubmit}>
            
            <div className="form-control">
                <label htmlFor="text">Transaction purpose</label>
                
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." /> 
            </div>
            
            <div className="form-control">
                <label htmlFor="amount">Amount <br/>
                (negative values are expenses, positive values are income)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            
            <button className="btn">Add transaction</button>
        
        </form>
    </>);
}