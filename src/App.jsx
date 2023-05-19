import React, { useState, useEffect } from 'react';

import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import FooterLinks from './Components/Footer/FooterLinks';
import Experience from './Components/Experience/Experience';
import Projects from './Components/ProjectsPage/Projects';
import Contact from './Components/Contact/Contact';
import {AboutIcon, ExperienceIcon, ProjectIcon, ContactIcon} from './SVG/SVGTabs';

import './App.css';

function App () {
  const components = [<About key='0'/>, <Experience key='1'/>, <Projects key='2'/>, <Contact key='3'/>];
  const icons = [<AboutIcon key='0'/>, <ExperienceIcon key='1'/>, <ProjectIcon key='2'/>, <ContactIcon key='3'/>];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextComponent = () => {
    const nextIndex = carouselIndex + 1;
    setCarouselIndex(nextIndex === components.length ? 0 : nextIndex);
  };

  const previouesComponent = () => {
    const previousIndex = carouselIndex - 1;
    setCarouselIndex(previousIndex < 0 ? components.length - 1 : previousIndex);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      const prevButton = document.querySelector('.span-previous');
      prevButton.click();
    } else if (event.key === 'ArrowRight') {
      const nextButton = document.querySelector('.span-next');
      nextButton.click();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
    <div className="App">
      <header>
        <NavBar setCarouselIndex={setCarouselIndex}/>
      </header>
      <main>
        <span className="span-previous" onClick={previouesComponent}>{icons[carouselIndex - 1] || icons[3]}</span>
        <section className="Main-component">{ components[carouselIndex] }</section>
        <span className="span-next" onClick={nextComponent}>{icons[carouselIndex + 1] || icons[0]}</span>
      </main>
      <footer>
        <FooterLinks/>
      </footer>
    </div>
  );
}

export default App;
