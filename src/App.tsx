import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import DataProvider from './components/context/DataContext';
import SignupFrom from './components/SignupFrom';

function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>

      {/* <SignupFrom /> */}
    </>
  );
}

export default App;

