import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'
import styles from './Main.module.scss'

function Main() {
  return (
    <>
      <div className="progress"></div>
      <main className="main">
        {/* Sections */}
        <section className={styles.home} id="home">
          <Home />
        </section>
        <section className={styles.skills} id="skills">
          <Skills />
        </section>
        <section className={styles.projects} id="projects">
          <Project />
        </section>
        <section className={styles.contact} id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default Main
