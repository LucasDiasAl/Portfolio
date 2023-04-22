import './NavBar.css';

function NavBar() {
  return (
    <div className='Nav-Bar'>
      <div className='Img-Div'>
        <img src="logo192.png" alt="Icone personalizado" />
      </div>
      <div className='Menu-List-Div'>
        <ol>
          <li style={{ animationDelay: '0ms' }}>Sobre</li>
          <li style={{ animationDelay: '100ms' }}>Experiência</li>
          <li style={{ animationDelay: '200ms' }}>Projetos</li>
          <li style={{ animationDelay: '300ms' }}>Contato</li>
        </ol>
        <div className='Curriculo-Div'>
          <p>
            Currículo
          </p>
        </div>
      </div>
    </div>
  )
}

export default NavBar;