import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Header'
import ToDos from './ToDos'

function App() {
  return (
    <div className="App">
      <Header />
      <ToDos />
    </div>
  )
}

export default App;
