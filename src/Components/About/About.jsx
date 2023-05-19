import React from 'react';
import './About.css';
import perfilImg from '../../Img/perfilImg.png';

function About () {
  return (
    <section className="About">
      <section className="Apresentacao">
        <section className="Texto-apresentacao">
          <h1 className="Saudacao">
            <span className="Palavra-marcada">Olá,</span>
          </h1>
          <h3 className="Nome">
            Me chamo <span className="Palavra-marcada">Lucas Dias.</span>
          </h3>
          <h2 className="Atribuicao">
            Sou um <span className="Palavra-marcada">Desenvolvedor Web.</span>
          </h2>
        </section>
        <img src={perfilImg} alt="Imagem de perfil" className="ProfileImg" />
      </section>
      <h4 className="Sobre-mim">  
        Sou um desenvolvedor com experiência em programação e estatística(Não concluído).
        Iniciei minha jornada na área de Estatística na UnB, mas percebi
        que meu verdadeiro interesse estava na programação. 
        Estou cursando Banco de Dados e Armazenamento de Big Data no IESB e me juntei à Trybe,
        onde aprimorei minhas habilidades em front-end e back-end através de projetos individuais e em grupo. 
        Agora, estou buscando novos desafios e oportunidades para aplicar meus conhecimentos e continuar crescendo como programador.
      </h4>
    </section>
  );
}

export default About;
