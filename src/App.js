import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopPage from './pages/TopPage';
import SecondPage from './pages/SecondPage';
import Header from './components/Header';

function App() {
  console.log('test1')
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<TopPage />} />
        <Route exact path='/pages/SecondPage' element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
