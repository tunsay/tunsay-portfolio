import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'
import './Main.scss'
import ParralaxSoccer from './ParralaxSoccer'

function Main() {
  return (
    <>
      <main className="main">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        {/* Sections */}
        <section className="home" id="home">
          <Home />
        </section>
        <section className="projects" id="projects">
          <Project />
        </section>
        <ParralaxSoccer />
        <section className="skills" id="skills">
          <Skills />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default Main
