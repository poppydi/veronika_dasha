import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import HomePage from './Pages/HomePage.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    
    </div>
  );
}

export default App;