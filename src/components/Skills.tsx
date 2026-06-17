import './Skills.scss'
import ExpertiseCards from './ExpertiseCards'

const skillGroups = [
  {
    label: 'Développement',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS / SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg' },
    ],
  },
  {
    label: 'Outils & DevOps',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitLab CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      {
        name: 'SonarQube',
        icon: null,
        customIcon: (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17.5C20 17.5 14 15 14 8" stroke="#CB3032" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M4 17.5C4 17.5 10 15 10 8" stroke="#CB3032" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M4 6.5C4 6.5 10 9 10 16" stroke="#4E9BCD" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M20 6.5C20 6.5 14 9 14 16" stroke="#4E9BCD" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        ),
      },
      { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    ],
  },
  {
    label: 'Design & Organisation',
    skills: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      {
        name: 'Notion',
        icon: null,
        customIcon: (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="18" fill="#fff"/>
            <text x="50" y="70" textAnchor="middle" fontSize="58" fontWeight="bold" fontFamily="Georgia, serif" fill="#000">N</text>
          </svg>
        ),
      },
    ],
  },
]

function Skills() {
  return (
    <div className="container-skills">
      <h1 className="title-container">Compétences</h1>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills-group">
            <p className="skills-group__label">{group.label}</p>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  <div className="skill-badge__icon">
                    {skill.customIcon ?? <img src={skill.icon!} alt={skill.name} />}
                  </div>
                  <span className="skill-badge__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ExpertiseCards />
    </div>
  )
}

export default Skills
