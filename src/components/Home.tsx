import './Home.scss'
import { Parallax } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

function Home() {
  const [isParallaxVisible, setIsParallaxVisible] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsParallaxVisible(window.innerWidth > 1024)
    }
    // Ajoutez un écouteur d'événement pour les changements de taille d'écran
    window.addEventListener('resize', handleResize)
    // Appelez la fonction handleResize une fois au montage pour définir l'état initial
    handleResize()
    // Nettoyez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Le tableau de dépendances vide assure que le hook useEffect s'exécute une seule fois au montage

  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-left-infos">
          <a
            href={process.env.PUBLIC_URL + '/Cv-Tuna-SAYGILI.pdf'}
            download={'Cv-Tuna-SAYGILI.pdf'}
            className="cv"
            target="_blank"
            title="Encore un peu plus de moi."
            rel="noreferrer"
          >
            <div className="cv__link">CV</div>
          </a>
          <div className="profil"></div>
        </div>
      </div>
      <div className="home-right">
        <Parallax
          speed={5}
          translateY={isParallaxVisible ? ['-100px', '100px'] : [0, 0]}
        >
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
