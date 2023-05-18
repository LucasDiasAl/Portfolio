import React from 'react';
import { backEndPngs, frontEndPngs, linguagensPng } from '../../Img/StacksPng';

function Stacks() {
  return (
    <section className="Experience-stacks">
      <section>
        <p>Linguagens:</p>
        <section className="stack-imgs">
          {linguagensPng.map((stack) => (
            <img key={stack.name} src={stack.img} alt={stack.name} />
          ))}
        </section>
      </section>

      <section>
        <p>Front-End:</p>
        <section className="stack-imgs">
          {frontEndPngs.map((stack) => (
            <img
              key={stack.name}
              src={stack.img}
              alt={stack.name}
              onClick={() =>
                window.open(stack.url, '_blank', 'noopener,noreferrer')
              }
              style={{ cursor: 'pointer' }}
            />
          ))}
        </section>
      </section>

      <section>
        <p>Back-End:</p>
        <section className="stack-imgs">
          {backEndPngs.map((stack) => (
            <img
              key={stack.name}
              src={stack.img}
              alt={stack.name}
              onClick={() =>
                window.open(stack.url, '_blank', 'noopener,noreferrer')
              }
              style={{ cursor: 'pointer' }}
            />
          ))}
        </section>
      </section>
      
    </section>
  );
}
export default Stacks;
