import './Home.scss'
import { Parallax } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-left-infos">
          <a
            href="/cv-tuna-saygili.pdf"
            download={'cv-Tuna-Saygili.pdf'}
            className="cv"
            target="_blank"
            title="Encore un peu plus de moi."
          >
            <div className="cv__link">CV</div>
          </a>
          <div className="profil"></div>
        </div>
        {/* <img src={avatar} alt="avatar qui ressemble à Touna" /> */}
      </div>
      <div className="home-right">
        <Parallax speed={10} translateY={['-100px', '100px']}>
          <span className="about-absolute">about</span>
          <h1 className="title-perso">Salut! C'est Tuna !</h1>
          <div className="desc-perso">
            <p>
              Ma détermination et ma passion me poussent à développer mes
              créations avec une attention particulière à l'expérience
              utilisateur. Animé par une soif d'apprendre constante, je suis à
              la recherche d'un emploi qui me permettra de progresser. Je suis
              capable de créer, maquetter et développer le Front et le Back d'un
              projet, grâce à ma multifonctionnalité.
            </p>
          </div>
          <div className="social-perso"></div>
          <div className="social">
            <div className="social-circle">
              <a
                href="https://github.com/tunsay"
                target="_blank"
                rel="noopener noreferrer"
                className="my-social"
              >
                Allez sur ma page Github
              </a>
              <div className="circle">
                <FontAwesomeIcon icon={faGithub} className="custom-icon" />
              </div>
            </div>
            <div className="social-circle">
              <a
                href="https://www.linkedin.com/in/tuna-saygili/"
                target="_blank"
                rel="noopener noreferrer"
                className="my-social"
              >
                Allez voir mon profil Linkedin
              </a>
              <div className="circle">
                <FontAwesomeIcon icon={faLinkedin} className="custom-icon" />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <p className="marquee">
        <span>
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test -
          Dynamique - Motivé - Curieux - Passioné - Investi - Perfectioniste -
          Javascript - React - Redux - Metal Gear Solid - Zelda - Test - &nbsp;
        </span>
      </p>
    </div>
  )
}

export default Home
