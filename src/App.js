import React from 'react';
import logo from './logo.svg';
import css from './App.css';
import Header from './components/Header';
import Foot from './components/Foot';
import { Route, Routes } from 'react-router-dom';
import Why from './navComponents/Why';
import Package from './navComponents/Packages'
import Ourwork from './navComponents/Ourwork'
function App() {
  return (
    <div className="App">
      <Header className={css.header}/>
    
      <div>
     
        <Routes>
          <Route path='whyus' element={<Why/>} />
          <Route path='packages' element={<Package/>} />
          <Route path='ourwork' element={<Ourwork/>} />
        </Routes>
     

      </div>
      <Foot/>
    </div>
  );
}

export default App;