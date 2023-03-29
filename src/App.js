
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Routes from './Routes';
import Header from './components/header';
import { GlobalStyles,  } from './components/main';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        
          <Routes></Routes>
        
    </BrowserRouter>
  );
}


export default App;
