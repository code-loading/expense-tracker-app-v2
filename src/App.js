import React from 'react';

import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionForm} from './components/TransactionForm';
import {History} from './components/History';
//import { GlobalProvider, GlobalContext } from './context/GlobalState';
//import { GlobalContext } from './context/GlobalState';



function App() {
  
  return (
      <>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpense/>
      <History/>
      <TransactionForm/>
      Github repo of this project: <a href="https://github.com/code-loading/expense-tracker-app-v2">code-loading's expense-app-v2</a>
      </div>
    </>
  );
}

export default App;
