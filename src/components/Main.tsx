import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'
import './Main.css'

function Main() {
  return (
    <>
      <main className="main">
        {/* Sections */}
        <section className="home" id="home">
          <Home />
        </section>
        <section className="projects" id="projects">
          <Project />
        </section>
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
