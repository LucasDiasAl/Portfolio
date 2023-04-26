import React from 'react';
import './Footer.css';
import Github from '../../SVG/SVGsFooter/SVGGithub';
import Linkedid from '../../SVG/SVGsFooter/SVGLinkedin';
import Email from '../../SVG/SVGsFooter/SVGEmail';

function FooterLinks () {
  return (
    <section className='Links'>
      <Github/>
      <Linkedid/>
      <Email/>
    </section>
  );
}

export default FooterLinks;
