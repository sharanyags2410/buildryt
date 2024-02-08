import React from 'react';
import logo from './logo.svg';
import css from './App.css';
import Header from './components/Header';
import Foot from './components/Foot';
import { Route, Routes } from 'react-router-dom';
import Why from './navComponents/Why';
import Package from './navComponents/Packages'
import Ourwork from './navComponents/Ourwork'
import Whoweare from './navComponents/Whoweare';
import Selecthome from './navComponents/Selecthome';
import Services from './navComponents/Services';
import Faq from './navComponents/Faq';
import Contactus from './navComponents/Contactus';
import Joinus from './navComponents/Joinus';
function App() {
  return (
    <div className="App">
      <Header className={css.header}/>
    
      <div>
     
        <Routes>
          <Route path='whyus' element={<Why/>} />
          <Route path='packages' element={<Package/>} />
          <Route path='ourwork' element={<Ourwork/>} />
          <Route path='whoweare' element={<Whoweare/>} />
          <Route path='selecthomes' element={<Selecthome/>} />
          <Route path='services' element={<Services/>} />
          <Route path='faq' element={<Faq/>} />
          <Route path='contactus' element={<Contactus/>} />
          <Route path='joinus' element={<Joinus/>} />
        </Routes>
     

      </div>
      <Foot/>
    </div>
  );
}

export default App;