import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
    
  );
};

export default App;
