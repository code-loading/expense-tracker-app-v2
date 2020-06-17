import React from 'react';

import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionForm} from './components/TransactionForm';
import {History} from './components/History';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpense/>
      <History/>
      <TransactionForm/>
      Github repo of this project: <a href="https://github.com/code-loading/expense-tracker-app-v2">code-loading's expense-app-vs</a>
      </div>
    </GlobalProvider>
  );
}

export default App;
