import './Project.scss'
import { ReactNode } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import sinelianceLogo from '../assets/Sineliance.svg'
import WorkflowDiagram from './WorkflowDiagram'
import Realizations from './Realizations'
import SoundRandomizerDemo from './SoundRandomizerDemo'

interface ProjectItemProps {
  mockUpImage?: string
  mockUpComponent?: ReactNode
  logoImage?: string
  logoComponent?: ReactNode
  description: string
  urlGit?: string
  urlGhPages?: string
  urlGhPages2?: string
  children?: ReactNode
}

function ProjectItem({
  mockUpImage,
  mockUpComponent,
  logoImage,
  logoComponent,
  description,
  urlGit,
  urlGhPages,
  urlGhPages2,
  children,
}: ProjectItemProps) {
  const hasLeft = !!mockUpImage || !!mockUpComponent

  return (
    <div className={`project-item ${hasLeft ? '' : 'project-item--centered'}`}>
      {hasLeft && (
        mockUpComponent
          ? <div className="left">{mockUpComponent}</div>
          : (
            <Parallax speed={5} scale={[0.9, 1.2]}>
              <div className="left">
                <img src={mockUpImage} alt="" />
              </div>
            </Parallax>
          )
      )}

      <div className="right">
        <div className="logo">
          {logoComponent
            ? <Parallax translateY={['-20px', '10px']} opacity={[0.4, 1]} easing="easeOutQuad">
                {logoComponent}
              </Parallax>
            : logoImage && (
              <Parallax translateY={['-20px', '10px']} opacity={[0.4, 1]} easing="easeOutQuad">
                <img src={logoImage} alt="" />
              </Parallax>
            )
          }
        </div>

        <Parallax translateY={['20px', '0px']} opacity={[0.3, 1]} easing="easeOutQuad">
          <div className="desc">{description}</div>
        </Parallax>

        {children}

        <div className="link-row">
          {urlGit && (
            <a className="link-github" href={urlGit} target="_blank" rel="noopener noreferrer">
              Voir Repo
            </a>
          )}
          {urlGhPages && (
            <a className="link-github" href={urlGhPages} target="_blank" rel="noopener noreferrer">
              Visiter le Site
            </a>
          )}
          {urlGhPages2 && (
            <a className="link-github" href={urlGhPages2} target="_blank" rel="noopener noreferrer">
              Voir Projet 2
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Project() {
  return (
    <div className="container-project">
      <h1 className="title-container">Projets</h1>

      <div className="project-block">
        <p className="project-section-label">
          <span>Emploi actuel</span>
          Sinéliance
        </p>
        <ProjectItem
          logoImage={sinelianceLogo}
          description="Sinéliance accompagne les entreprises dans la préservation et la transmission de leurs savoir-faire critiques. Le site vitrine présente les différentes offres et expertises pour éviter la perte de compétences et optimiser la gestion des connaissances."
          urlGhPages="https://www.sineliance.fr"
        >
          <Realizations />
          <WorkflowDiagram />
        </ProjectItem>
      </div>

      <div className="project-block">
        <p className="project-section-label">
          <span>Projet personnel</span>
          Sound Randomizer
        </p>
        <ProjectItem
          mockUpComponent={<SoundRandomizerDemo />}
          logoComponent={
            <div className="sound-logo">
              <FontAwesomeIcon icon={faVolumeHigh} />
              <span>Sound Randomizer</span>
            </div>
          }
          description="Sélectionnez un dossier contenant des fichiers MP3 et le programme lancera automatiquement les pistes audio de façon aléatoire, dans un intervalle de temps configurable. Un projet personnel né d'un besoin réel."
          urlGit="https://github.com/tunsay/Sound_Randomizer"
          urlGhPages="https://tunsay.github.io/Sound_Randomizer/"
        />
      </div>
    </div>
  )
}

export default Project
