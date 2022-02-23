import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopPage from './pages/TopPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' component={TopPage} />
      </Routes>
    </Router>
  );
}

export default App;
