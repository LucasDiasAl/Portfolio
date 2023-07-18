import './NavBar.css';
import React from 'react';
import LogoBackGround from '../../SVG/SVGLogo/SVGLogoBackGround';
import LogoFront from '../../SVG/SVGLogo/SVGLogoFront';

import { AboutIcon, ContactIcon, ExperienceIcon, ProjectIcon,} from '../../SVG/SVGTabs';

// eslint-disable-next-line react/prop-types
function NavBar ({setCarouselIndex}) {
  const handleOnClickChangeIndex = (actualIndex) => {
    setCarouselIndex(actualIndex);
  };
  const handleOnClickOpenResume = () => {
    const pdfFile = process.env.PUBLIC_URL + '/Lucas_Dias_Alencar_Curriculo.pdf';
    window.open(pdfFile, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="Nav-Bar">
      <section className="Logo-Div" onClick={ () => window.location.reload()}>
        <LogoBackGround className="Logo-background" />
        <LogoFront className="Logo"/>
      </section>
      <section className="Menu-List-Div">
        <ol>
          <li style={{ animationDelay: '100ms' }} onClick={() => handleOnClickChangeIndex(0)}><AboutIcon/>Sobre</li>
          <li style={{ animationDelay: '200ms' }} onClick={() => handleOnClickChangeIndex(1)}><ExperienceIcon/>Experiência</li>
          <li style={{ animationDelay: '300ms' }} onClick={() => handleOnClickChangeIndex(2)}><ProjectIcon/>Projetos</li>
          <li style={{ animationDelay: '400ms' }} onClick={() => handleOnClickChangeIndex(3)}><ContactIcon/>Contato</li>
        </ol>
        <section className="Curriculo-Div" onClick={handleOnClickOpenResume}>
          <p>Currículo</p>
        </section>
      </section>
    </section>
  );
}

export default NavBar;
