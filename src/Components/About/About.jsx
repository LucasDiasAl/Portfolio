import React from 'react';
import './About.css';
import perfilImg from '../../Img/perfilImg.png';

function About () {
  return (
    <section className="About">
      <section className="Apresentacao">
        <section className="Texto-apresentacao">
          <h1 className="Saudacao">
            <span className="Palavra-marcada">Olá</span>,
          </h1>
          <h3 className="Nome">
        Me chamo <span className="Palavra-marcada">Lucas Dias.</span>
          </h3>
          <h2 className="Atribuicao">
        Sou um <span className="Palavra-marcada">Desenvolvedor Web.</span>
          </h2>
        </section>
        <img src={ perfilImg } alt="Imagem de perfil" className="ProfileImg" />
      </section>
      <h4 className="Sobre-mim">
      Tive uma breve passagem pelo curso de estatística na UnB(Universidade federal de Brasília), onde cursei por dois anos.Apos um reflexão
      optei por deixar o curso em busca de algo que eu realmente gostaria de fazer. Passei a cursar Banco de Dados e Armazenamento de Big Data
      no IESB(INSTITUTO DE EDUCAÇÃO SUPERIOR DE BRASÍLIA) e pouco depois ingressei na Trybe, escola de desenvolvimento Web,
      onde trabalhei em diversos projetos em grupo e individuais, montando aplicações que aprimoraram meus conhecimentos em front-end e back-end.
      Meu tempo na estatística meu proveu habilidades analíticas e de lógica que foram de grande proveito na minha jornada na programção enquanto
      a trybe me ensinou de fato a programar e a construir aplicações por completo além de melhorar minhas habilidades de comunicação e controle emocional.
      Minha história no mundo da programção ainda está no incio e estou pronto pro próximo desafio.
      </h4>
    </section>
  );
}

export default About;
