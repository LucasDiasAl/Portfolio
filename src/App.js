import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import FooterLinks from './Components/Footer/FooterLinks';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className='Nav_Header'>
        <NavBar/>
      </header>
      <main>
        <About />
      </main>
      <footer>
        <FooterLinks/>
      </footer>
    </div>
  );
}

export default App;
