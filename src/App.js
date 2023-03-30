
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Routes from './Routes';
import Header from './components/header';
import Footer from './components/footer';
import { GlobalStyles } from './components/main';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        
        
          <Routes></Routes>

      <Footer/>
    </BrowserRouter>
  );
}


export default App;
