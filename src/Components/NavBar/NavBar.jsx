import './NavBar.css';
import LogoBackGround from '../../SVG/SVGLogo/SVGLogoBackGround';
import LogoFront from '../../SVG/SVGLogo/SVGLogoFront';
import React from 'react';

function NavBar () {
  return (
    <section className="Nav-Bar">
      <section className="Logo-Div">
        <LogoBackGround className="Logo-background" />
        <LogoFront className="Logo"/>
      </section>
      <section className="Menu-List-Div">
        <ol>
          <li style={{ animationDelay: '100ms' }}>Sobre</li>
          <li style={{ animationDelay: '200ms' }}>Experiência</li>
          <li style={{ animationDelay: '300ms' }}>Projetos</li>
          <li style={{ animationDelay: '400ms' }}>Contato</li>
        </ol>
        <section className="Curriculo-Div">
          <p>Currículo</p>
        </section>
      </section>
    </section>
  );
}

export default NavBar;
