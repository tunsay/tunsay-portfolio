import './Header.scss'

function Header() {
  return (
    <header>
      <div className="personal-info">
        <h1>Tuna Saygili </h1>
      </div>
      <nav className="navigation-links">
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
