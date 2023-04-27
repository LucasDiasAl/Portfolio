import React, { useState } from 'react';
import './Footer.css';
import Github from '../../SVG/SVGsFooter/SVGGithub';
import Linkedid from '../../SVG/SVGsFooter/SVGLinkedin';
import Email from '../../SVG/SVGsFooter/SVGEmail';

function FooterLinks () {
  const [alertCopied, setAlertCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('lucaalencarID@gmail.com');
    setAlertCopied(true);
    setTimeout(() => setAlertCopied(false), 3000);
  };

  return (
    <section className="Links">
      <a className="Github-sec" href="https://github.com/LucasDiasAl" target="_blank" rel="noreferrer">
        <Github/>
      </a>
      <a className="Linkedin-sec" href="https://www.linkedin.com/in/lucasdiasal/" target="_blank" rel="noreferrer">
        <Linkedid />
      </a>
      <section className="Email-sec" onClick={handleCopy}>
        <Email/>
        <p>lucaalencarID@gmail.com</p>
        {alertCopied && (<span>Email copiado!</span>)}
      </section>
    </section>
  );
}

export default FooterLinks;
