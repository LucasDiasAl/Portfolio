import React, { useState } from 'react';

import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import FooterLinks from './Components/Footer/FooterLinks';
import Experience from './Components/Experience/Experience';
import AboutIcon from './SVG/SVGTabs/SVGAbout';
import ExperienceIcon from './SVG/SVGTabs/SVGExperience';

import './App.css';

function App () {
  const components = [<About key='0'/>, <Experience key='1'/>];
  const icons = [<AboutIcon key='0'/>, <ExperienceIcon key='1'/>];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [nextButtonIndex, setNextButtonIndex] = useState(1);
  const [previousButtonIndex, setPreviousButtonIndex] = useState(components.length - 1);

  const nextComponent = () => {
    const nextIndex = carouselIndex + 1;
    setCarouselIndex(nextIndex === components.length ? 0 : nextIndex);
    setNextButtonIndex(nextIndex + 1 === components.length ? 0 : 1);
    setPreviousButtonIndex(nextIndex - 1 <= 0 ? 0 : 1);
  };

  const previouesComponent = () => {
    const nextIndex = carouselIndex - 1;
    setCarouselIndex(nextIndex < 0 ? components.length - 1 : nextIndex);
    setNextButtonIndex(nextIndex + 1 === components.length - 1 ? 1 : 0);
    setPreviousButtonIndex(nextIndex < 0 ? 0 : 1);
    console.log('previous', previousButtonIndex);
  };

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <span className="span-previous" onClick={previouesComponent}>{icons[previousButtonIndex]}</span>
        <section className="Main-component">{ components[carouselIndex] }</section>
        <span className="span-next" onClick={nextComponent}>{icons[nextButtonIndex]}</span>
      </main>
      <footer>
        <FooterLinks/>
      </footer>
    </div>
  );
}

export default App;
