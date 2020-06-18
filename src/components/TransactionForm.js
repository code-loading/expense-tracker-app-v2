import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionForm = () => {
    
    
    //const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Income, Salary, Investment profit');
    const [disp, setDisp] = useState(false);
    //let newCat;
    //const [newCat, setNewcat] = useState('other');
    
    const { addTransaction, maxValue } = useContext(GlobalContext);

    //value={disp? 'other':''}
    //value={category}
    //newCat = e.target.value;
    //newCat = "other";
    //setNewcat(e.target.value); line65 inside ugly if




    const onSubmit = e => {
        if (amount < maxValue && amount > maxValue*-1) {
        e.preventDefault();
        
        /* if (category==="other"){
            setCategory(newCat);
        } else {} */
        
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            category,
            amount: +amount
        }

        addTransaction(newTransaction); 
        } else {
            alert("Are you sure? Please enter an income or expense lower than €"+maxValue);
            e.preventDefault();
        }
        
        /* if (category==="other"){
            setDisp(true);
        } else {
            setDisp(false);
        } */
        setDisp(false);
        setCategory("Income, Salary, Investment profit");
        
        
    }

    const otherCat = e => {
              
        if (e.target.value === "other") {
            
            setCategory("other");
            setDisp(true);
            //setNewcat();
        } else {
            setCategory(e.target.value);
            setDisp(false);
        }
        
        
    }


    return(<>
        <h3>Add transactions</h3>
        <form onSubmit={onSubmit}>
            
                      

            <div className="form-control">
                <label htmlFor="dropdown"><strong>Expense Category:</strong>
                <br/>
                (choose other to enter your own option!)</label>
                <br/>

                <select name="dropdown" value={category} onChange={(e) => otherCat(e)}>
                    <option value="other">Other</option>
                    <option value="Income, Salary, Investment profit">Income, Salary, Investment profit</option>
                    <option value="Food, Groceries">Food, Groceries</option>
                    <option value="Clothing, Fashion, Accessories">Clothing, Fashion, Accessories</option>
                    <option value="Recreation, Fun">Recreation, Fun</option>
                    <option value="Miscallaneous">Miscallaneous</option>

                </select>
            </div>

            <div className="form-control" style={{display: disp ? "block":"none"}}>
                <label htmlFor="custcat"><strong>Enter your category:</strong>
                <br/>
                <strong>Remeber to change at least one character each time!</strong></label>
                <br />
                <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." />
            </div>

            <div className="form-control">
                <label htmlFor="amount"><strong>Amount:</strong> <br/>
                Try submitting a value <strong>larger than +€{maxValue}</strong> or <strong>smaller than -€{maxValue}</strong>to see what happens!</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            
            <button className="btn">Add transaction</button>
        
        </form>
    </>);
}