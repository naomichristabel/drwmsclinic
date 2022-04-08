import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AppointmentPage from './screens/AppointmentPage';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const app = (
  <Router>
    <div>
      <Header />
      
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/appointment' element={<AppointmentPage />} />
      </Routes>
    
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();