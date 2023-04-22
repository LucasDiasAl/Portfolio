import './NavBar.css';

function NavBar() {
  return (
    <div className='Nav-Bar'>
      <div class="Logo-Div">
        <svg class="Logo-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25"/>
        </svg>
        <svg class="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" stroke-width="4" />
          <text x="50" y="50" font-size="60" text-anchor="middle" alignment-baseline="central">D</text>
        </svg>
      </div>
      <div className='Menu-List-Div'>
        <ol>
          <li style={{ animationDelay: '100ms' }}>Sobre</li>
          <li style={{ animationDelay: '200ms' }}>Experiência</li>
          <li style={{ animationDelay: '300ms' }}>Projetos</li>
          <li style={{ animationDelay: '400ms' }}>Contato</li>
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