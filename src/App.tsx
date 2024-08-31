import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountTable from './components/taskTable';


function App() {
  return (
    <div className="App">
      <h1 className="title mt-5">COUNTER</h1>
      <CountTable />
    </div>
  );
}

export default App;
