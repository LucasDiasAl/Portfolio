import './NavBar.css';
import React from 'react';
import LogoBackGround from '../../SVG/SVGLogo/SVGLogoBackGround';
import LogoFront from '../../SVG/SVGLogo/SVGLogoFront';

import { AboutIcon, ContactIcon, ExperienceIcon, ProjectIcon,} from '../../SVG/SVGTabs';

// eslint-disable-next-line react/prop-types
function NavBar ({setCarouselIndex}) {
  const handleOnClick = (actualIndex) => {
    setCarouselIndex(actualIndex);
  };
  return (
    <section className="Nav-Bar">
      <section className="Logo-Div">
        <LogoBackGround className="Logo-background" />
        <LogoFront className="Logo"/>
      </section>
      <section className="Menu-List-Div">
        <ol>
          <li style={{ animationDelay: '100ms' }} onClick={() => handleOnClick(0)}><AboutIcon/>Sobre</li>
          <li style={{ animationDelay: '200ms' }} onClick={() => handleOnClick(1)}><ExperienceIcon/>Experiência</li>
          <li style={{ animationDelay: '300ms' }} onClick={() => handleOnClick(2)}><ProjectIcon/>Projetos</li>
          <li style={{ animationDelay: '400ms' }} onClick={() => handleOnClick(3)}><ContactIcon/>Contato</li>
        </ol>
        <section className="Curriculo-Div">
          <p>Currículo</p>
        </section>
      </section>
    </section>
  );
}

export default NavBar;
