import React from 'react';
import './Contact.css';

function Contact () {
  const handleCopy = () => {
    navigator.clipboard.writeText('lucaalencarID@gmail.com');
  };
  return (
    <section>
      <h1> Quer entrar em contato?</h1>
      <h3>Me mande um email.</h3>
      <h4>Tentarei responder o mais rápido que puder.</h4>
      <section className="contact"><div onClick={() => window.location.href='mailto:lucaalencarID@gmail.com'}>Dê um olá</div></section>
    </section>
  );
}

export default Contact;