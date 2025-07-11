import React from 'react';
import Router from './components/router';
import './App.css';
import { ThemeProvider } from './context/themeContext';

function App() {
  return (
    <ThemeProvider>
        <div className="app">
          <Router />
        </div>
    </ThemeProvider>
  );
}

export default App;