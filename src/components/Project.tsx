import './Project.scss'
import { Parallax } from 'react-scroll-parallax'
import sinelianceLogo from '../assets/Sineliance.svg'

interface ProjectItemProps {
  mockUpImage: string
  logoImage: string
  description: string
  urlGit: string
  urlGhPages: string
  urlGhPages2: string | undefined
}

const projectItems: {
  mockUpImage: string
  logoImage: string
  description: string
  urlGit: string
  urlGhPages: string
  urlGhPages2?: string
}[] = [
    {
      mockUpImage: '',
      logoImage: sinelianceLogo,
      description:
        "Sinéliance accompagne les entreprises dans la préservation et la transmission de leurs savoir-faire critiques. Le site vitrine présente les différentes offres et expertises pour éviter la perte de compétences et optimiser la gestion des connaissances.",
      urlGit: '',
      urlGhPages: 'https://www.sineliance.fr',
    }
  ]

function ProjectItem({
  mockUpImage,
  logoImage,
  description,
  urlGit,
  urlGhPages,
  urlGhPages2,
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <Parallax speed={5} scale={[0.9, 1.2]}>
        <div className="left">
          <img src={mockUpImage} alt="" />
        </div>
      </Parallax>
      <div className="right">
        <div className="logo">
          <Parallax translateX={['-300px', '0px']} easing={[0, 1, 1, 1]}>
            <img src={logoImage} alt="" />
          </Parallax>
        </div>
        <Parallax translateY={['30px', '0px']} easing={[0, 1, 1, 1]}>
          <div className="desc">{description}</div>
        </Parallax>
        <div className="link-row">
          {urlGit && (
            <a
              className="link-github"
              href={urlGit}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir Repo
            </a>
          )}
          {urlGhPages && (
            <a
              className="link-github"
              href={urlGhPages}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visiter le Site
            </a>
          )}
          {urlGhPages2 && (
            <a
              className="link-github"
              href={urlGhPages2}
              target="_blank"
              rel="noopener noreferrer"
            >
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
      {projectItems.map((item, index) => (
        <ProjectItem
          key={index}
          mockUpImage={item.mockUpImage}
          logoImage={item.logoImage}
          description={item.description}
          urlGit={item.urlGit}
          urlGhPages={item.urlGhPages}
          urlGhPages2={item.urlGhPages2}
        />
      ))}
    </div>
  )
}

export default Project
