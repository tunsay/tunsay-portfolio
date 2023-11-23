function Header() {
  return (
    <div className="header-bar">
      <div className="progress"></div>
      <header>
        <div className="personal-info">
          <h1>Tuna Saygili</h1>
          <h2>Développeur Full stack</h2>
        </div>
        <nav className="navigation-links">
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Header
