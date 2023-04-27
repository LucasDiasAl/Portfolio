import React from 'react';
import coursesData from '../../Data/coursesData';

function Courses () {
  return (
    <>
      {
        coursesData.map((course) => (
          <section key={course.curso} className="Curso">
            <div className="Curso-instituicao"><h3>{course.instituicao}</h3> <p>-</p> <span>{course.curso}</span></div>
            <p>{course.descricao}</p>
          </section>
        ))
      }
    </>
  );
}
export default Courses;
