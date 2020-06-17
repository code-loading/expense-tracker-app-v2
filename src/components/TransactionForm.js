import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const TransactionForm = () => {
    
    //created state for the amount and purpose of transaction
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    //Transaction within 4History was where the delete button is so the deleteTransaction Action
    //was being called there. Whereas here in TransactionForm is where we can add the transactions from
    //so we're calling the addTransaction action from GlobalState here. 
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        //##############try removing this later to see what happens##############
        //the form does nothing then
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            //text and amount are written below in the form as value={text}, value={amount}
            //so no need to add it again here. alternatively we could write the following 2 lines
            //as text: text, amount: amount, which isn't needed. 
            text,
            //fixed error for amount being a string here according to the video
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return(<>
        <h3>Add new transactions</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Transaction purpose</label>

                {/**onChange is an event that happens whenever we change text inside the Transaction purpose form
                 * e is the event which is being passed to the anon function triggered by the change (e)
                 * e.target.value is the value of what the user enters. it is updated continuously as the user types,
                 * because the onChange event is continuously taking place whilst the user is typing text in the form
                 */}
                {/*whats the purpose of value={text} below this comment?*/}
                <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Enter text..."/> 
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br/>
                (negative values are expenses, positive values are income)</label>
                <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..."/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>);
}

//export default TransactionForm;