import './Project.scss'
import argentBankMockUp from '../assets/2.png'
import argentbanklogo from '../assets/logo2.svg'
import { Parallax } from 'react-scroll-parallax'

interface ProjectItemProps {
  mockUpImage: string
  logoImage: string
  description: string
}

const projectItems = [
  {
    mockUpImage: argentBankMockUp,
    logoImage: argentbanklogo,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod, hic non, earum excepturi temporibus sunt optio nihil deserunt odit aut molestias, numquam sapiente nesciunt aperiam vitae impedit corporis voluptate!',
  },
  {
    mockUpImage: argentBankMockUp,
    logoImage: argentbanklogo,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod, hic non, earum excepturi temporibus sunt optio nihil deserunt odit aut molestias, numquam sapiente nesciunt aperiam vitae impedit corporis voluptate!',
  },
  {
    mockUpImage: argentBankMockUp,
    logoImage: argentbanklogo,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod, hic non, earum excepturi temporibus sunt optio nihil deserunt odit aut molestias, numquam sapiente nesciunt aperiam vitae impedit corporis voluptate!',
  },
  {
    mockUpImage: argentBankMockUp,
    logoImage: argentbanklogo,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod, hic non, earum excepturi temporibus sunt optio nihil deserunt odit aut molestias, numquam sapiente nesciunt aperiam vitae impedit corporis voluptate!',
  },
]

function ProjectItem({
  mockUpImage,
  logoImage,
  description,
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
          <Parallax translateX={['-300px', '0px']} easing={[0, 1, 0.8, 1]}>
            <img src={logoImage} alt="" />
          </Parallax>
        </div>
        <div className="desc">{description}</div>
        <div className="button"></div>
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
        />
      ))}
    </div>
  )
}

export default Project
