import React from 'react';
import Router from './components/router';
import './App.css';
import { ThemeProvider } from './context/themeContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <ThemeProvider>
        <div className="app">
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </div>
    </ThemeProvider>
  );
}

export default App;