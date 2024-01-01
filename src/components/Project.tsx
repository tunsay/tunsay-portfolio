import './Project.scss'
import argentBankMockUp from '../assets/2.png'
import petitPlatMockUp from '../assets/3.png'
import sportSeeMockUp from '../assets/4.png'
import kasaMockUp from '../assets/5.png'
import flight from '../assets/6.png'
import argentBankLogo from '../assets/logo2.png'
import petitPlatLogo from '../assets/logo3.png'
import sportSeeLogo from '../assets/logo4.svg'
import kasaLogo from '../assets/logo5.png'
import flightLogo from '../assets/logo6.png'
import { Parallax } from 'react-scroll-parallax'

interface ProjectItemProps {
  mockUpImage: string
  logoImage: string
  description: string
  urlGit: string
  urlGhPages: string
  urlGhPages2: string | undefined
}

const projectItems = [
  {
    mockUpImage: argentBankMockUp,
    logoImage: argentBankLogo,
    description:
      "Le projet consiste à développer une application web React pour Argent Bank, avec une première phase axée sur l'authentification des utilisateurs. Les outils principaux incluent React pour la construction de l'interface utilisateur, Redux pour la gestion de l'état global de l'application, et Swagger pour spécifier les endpoints d'API nécessaires à la communication avec le backend. L'équipe devra également modéliser les API pour la future phase 2 du projet, dédiée aux transactions.",
    urlGit: 'https://github.com/tunsay/P13_Argent_Bank_Front',
    urlGhPages: '',
  },
  {
    mockUpImage: petitPlatMockUp,
    logoImage: petitPlatLogo,
    description:
      "L'entreprise, spécialisée dans les livres de cuisine, se lance dans la création d'un site de recettes. La première mission consiste à mettre en œuvre une fonction de recherche efficace à l'aide d'un fichier JSON de 50 recettes, en utilisant des technologies front-end comme React et des outils tels que Git et Jsben.ch pour comparer les performances de deux implémentations distinctes.",
    urlGit: 'https://github.com/tunsay/P7_Les-petits-plats',
    urlGhPages: 'https://tunsay.github.io/P7_Les-petits-plats/',
  },
  {
    mockUpImage: sportSeeMockUp,
    logoImage: sportSeeLogo,
    description:
      "SportSee lance une nouvelle version de la page profil utilisateur, focalisée sur le suivi des sessions et des calories. Le développement de la page avec React inclut l'intégration de graphiques, avec le choix entre D3 et Recharts. Le backend NodeJS fournit des données d'exemple via des appels HTTP, à gérer hors des composants React avec Fetch ou Axios, et nécessite une standardisation des données de l'API.",
    urlGit: 'https://github.com/tunsay/SportSee',
    urlGhPages: 'https://tunsay.github.io/P12-front-end-dashboard/',
  },
  {
    mockUpImage: kasaMockUp,
    logoImage: kasaLogo,
    description:
      "Kasa entreprend une refonte majeure de son site ASP.NET vieux de 10 ans vers une stack JavaScript (NodeJS, React). La mission consiste à démarrer le projet React, développer l'application front-end en suivant les maquettes Figma, avec des données d'exemple fournies en attendant le recrutement du back-end. Le design détaillé par Paul inclut des fonctionnalités comme une galerie d'images réactive et des Collapse.",
    urlGit: 'https://github.com/tunsay/p11_my_project_kasa',
    urlGhPages: 'https://tunsay.github.io/p11_my_project_kasa/',
  },
  {
    mockUpImage: flight,
    logoImage: flightLogo,
    description:
      "Le projet consiste en un gestionnaire de réservations de voyages, où les utilisateurs peuvent effectuer une réservation et supprimer une réservation existante. Deux versions du projet ont été développées, l'une en JavaScript et l'autre en TypeScript, utilisant React et Redux pour la gestion de l'état global et des actions asynchrones. Les données des réservations sont stockées dans le store Redux, et chaque réservation est représentée par un objet avec des propriétés telles que la date, la destination, le nombre de personnes et la classe.",
    urlGit: 'https://github.com/tunsay/Voyage-city-js-react-redux',
    urlGhPages: 'https://tunsay.github.io/Voyage-city-js-react-redux',
    urlGhPages2: 'https://tunsay.github.io/Voyage-city-typescript-react-redux',
  },
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
          <a
            className="link-github"
            href={urlGit}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir Repo
          </a>
          {urlGhPages && (
            <a
              className="link-github"
              href={urlGhPages}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir Projet
            </a>
          )}
          {urlGhPages2 && (
            <a
              className="link-github"
              href={urlGhPages2}
              target="_blank"
              rel="noopener noreferrer"
            >
              En TypeScript
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
