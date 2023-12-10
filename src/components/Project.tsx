import './Project.scss'
import argentBankMockUp from '../assets/2.png'
import petitPlatMockUp from '../assets/3.png'
import sportSeeMockUp from '../assets/4.png'
import kasaMockUp from '../assets/5.png'
import argentBankLogo from '../assets/logo2.png'
import petitPlatLogo from '../assets/logo3.png'
import sportSeeLogo from '../assets/logo4.svg'
import kasaLogo from '../assets/logo5.png'
import { Parallax } from 'react-scroll-parallax'

interface ProjectItemProps {
  mockUpImage: string
  logoImage: string
  description: string
  url: string
}

const projectItems = [
  {
    mockUpImage: argentBankMockUp,
    logoImage: argentBankLogo,
    description:
      "Le projet consiste à développer une application web React pour Argent Bank, avec une première phase axée sur l'authentification des utilisateurs. Les outils principaux incluent React pour la construction de l'interface utilisateur, Redux pour la gestion de l'état global de l'application, et Swagger pour spécifier les endpoints d'API nécessaires à la communication avec le backend. L'équipe devra également modéliser les API pour la future phase 2 du projet, dédiée aux transactions.",
    url: 'https://github.com/tunsay/P13_Argent_Bank_Front',
  },
  {
    mockUpImage: petitPlatMockUp,
    logoImage: petitPlatLogo,
    description:
      "L'entreprise, spécialisée dans les livres de cuisine, se lance dans la création d'un site de recettes. La première mission consiste à mettre en œuvre une fonction de recherche efficace à l'aide d'un fichier JSON de 50 recettes, en utilisant des technologies front-end comme React et des outils tels que Git et Jsben.ch pour comparer les performances de deux implémentations distinctes.",
    url: 'https://github.com/tunsay/P7_Les-petits-plats',
  },
  {
    mockUpImage: sportSeeMockUp,
    logoImage: sportSeeLogo,
    description:
      "SportSee lance une nouvelle version de la page profil utilisateur, focalisée sur le suivi des sessions et des calories. Le développement de la page avec React inclut l'intégration de graphiques, avec le choix entre D3 et Recharts. Le backend NodeJS fournit des données d'exemple via des appels HTTP, à gérer hors des composants React avec Fetch ou Axios, et nécessite une standardisation des données de l'API.",
    url: 'https://github.com/tunsay/SportSee',
  },
  {
    mockUpImage: kasaMockUp,
    logoImage: kasaLogo,
    description:
      "Kasa entreprend une refonte majeure de son site ASP.NET vieux de 10 ans vers une stack JavaScript (NodeJS, React). La mission consiste à démarrer le projet React, développer l'application front-end en suivant les maquettes Figma, avec des données d'exemple fournies en attendant le recrutement du back-end. Le design détaillé par Paul inclut des fonctionnalités comme une galerie d'images réactive et des Collapse.",
    url: 'https://github.com/tunsay/p11_my_project_kasa',
  },
]

function ProjectItem({
  mockUpImage,
  logoImage,
  description,
  url,
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <Parallax speed={5} scale={[0.9, 1.5]}>
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
        <a
          className="link-github"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir Projet
        </a>
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
          url={item.url}
        />
      ))}
    </div>
  )
}

export default Project
