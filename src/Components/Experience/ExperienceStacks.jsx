import React from 'react';
import stackData from '../../Data/stackData';

function Stacks () {
  return (
    <section className="Experience-stacks">
      {
        stackData.map(({ stack, proficiencia }) => (
          <section key={stack} className="stack">
            <span>{stack}:</span>
            <h6>Profieciencia: {proficiencia}</h6>
          </section>
        ))
      }
    </section>
  );
}
export default Stacks;
