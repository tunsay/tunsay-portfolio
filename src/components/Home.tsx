import './Home.scss'
import { Parallax } from 'react-scroll-parallax'

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-left-infos">
          <a
            href="tunsay-portfolio/src/assets/cv-tuna-saygili.pdf"
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
          <h2 className="title-perso">Contact Moi !</h2>
          <div className="mail-circle">
            <span className="my-mail">tuna.saygili@live.fr</span>
            <div className="circle">
              <span className="material-symbols-outlined mail-icon">mail</span>
            </div>
          </div>
          {/* <p>Email: tuna.saygili@live.fr</p> */}
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
