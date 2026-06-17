import './Home.scss'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faXmark, faFilePdf, faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [isParallaxVisible, setIsParallaxVisible] = useState(true)
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [pdfZoom, setPdfZoom] = useState(1)

  useEffect(() => {
    const handleResize = () => setIsParallaxVisible(window.innerWidth > 1024)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!cvModalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setCvModalOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [cvModalOpen])

  return (
    <>
    <div className="home-container">
      <div className="home-left">
        <div className="home-left-infos">
          <button type="button" className="cv" onClick={() => setCvModalOpen(true)}>
            <div className="cv__link">CV</div>
          </button>
          <div className="profil"></div>
        </div>
      </div>
      <div className="home-right">
        <Parallax
          speed={5}
          translateY={isParallaxVisible ? ['-100px', '100px'] : [0, 0]}
        >
          <span className="about-absolute">about</span>
          <h1 className="title-perso"> Expert en sécurité des
            développements informatiques </h1>
          <div className="desc-perso">
            <p>
              Expert en cybersécurité, je sécurise, j’audite et j’analyse les systèmes avec une approche concrète et orientée résultats. Je maîtrise les audits applicatifs, l’OWASP, les tests de sécurité, la gestion des risques et les fondamentaux techniques (réseau, crypto, identité, TLS…).

              Je suis animé par une veille constante, une vraie exigence technique et l’envie de renforcer la sécurité des organisations.
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
    {cvModalOpen && (
      <dialog
        className="cv-modal-overlay"
        open
        aria-label="Télécharger mon CV"
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="cv-modal-backdrop" onClick={() => setCvModalOpen(false)} />
        <div className="cv-modal">
          <button type="button" className="cv-modal__close" aria-label="Fermer" onClick={() => setCvModalOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h2 className="cv-modal__title">
            <FontAwesomeIcon icon={faFilePdf} className="cv-modal__title-icon" />
            Mon CV
          </h2>
          <div className="cv-modal__zoom-bar">
            <button
              type="button"
              className="cv-modal__zoom-btn"
              aria-label="Dézoomer"
              onClick={() => setPdfZoom(z => Math.max(0.5, +(z - 0.25).toFixed(2)))}
            >
              <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
            </button>
            <span className="cv-modal__zoom-level">{Math.round(pdfZoom * 100)}%</span>
            <button
              type="button"
              className="cv-modal__zoom-btn"
              aria-label="Zoomer"
              onClick={() => setPdfZoom(z => Math.min(3, +(z + 0.25).toFixed(2)))}
            >
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
            </button>
          </div>
          <div className="cv-modal__preview-wrap">
            <iframe
              className="cv-modal__preview"
              src={process.env.PUBLIC_URL + '/cv-tuna-saygili.pdf'}
              title="Aperçu du CV"
              style={{
                width: `${100 * pdfZoom}%`,
                height: `${Math.max(65, 65 * pdfZoom)}vh`,
              }}
            />
          </div>
          <a
            className="cv-modal__download"
            href={process.env.PUBLIC_URL + '/cv-tuna-saygili.pdf'}
            download="cv-tuna-saygili.pdf"
          >
            <FontAwesomeIcon icon={faDownload} />
            Télécharger le CV
          </a>
        </div>
      </dialog>
    )}
    </>
  )
}

export default Home
