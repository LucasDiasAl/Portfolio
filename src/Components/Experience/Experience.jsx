import React, { useState } from 'react';
import Courses from './ExperienceCourses';
import Stacks from './ExperienceStacks';
import './Experience.css';

function Experience () {
  const [changeExperiencePage, setChangeExperiencePage] = useState(true);
  const [buttonName, setButtonName] = useState('Stacks');

  const handlePageChange = () => {
    const buttonNameOptions = {
      true: 'Stacks',
      false: 'Cursos'
    };
    setChangeExperiencePage(!changeExperiencePage);
    setButtonName(buttonNameOptions[!changeExperiencePage]);
  };
  return (
    <section className="Experience">
      <section className="Button-experience">
        <button onClick={handlePageChange}>{buttonName}</button>
      </section>
      <p className="Titulo">{buttonName === 'Stacks' ? 'Cursos' : 'Stacks'}</p>
      {changeExperiencePage && <Courses/>}
      {!changeExperiencePage && <Stacks/>}
    </section>
  );
}
export default Experience;
