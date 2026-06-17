import './Realizations.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPalette,
  faBolt,
  faCodeBranch,
  faShieldHalved,
  faServer,
  faChartLine,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'

const cards = [
  {
    icon: faPalette,
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    metric: null,
    title: 'Refonte visuelle',
    desc: 'Intégration complète du nouveau design — refonte totale de l\'interface du site.',
  },
  {
    icon: faBolt,
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)',
    metric: '+80%',
    metricLabel: 'plus rapide',
    title: 'Performances',
    desc: 'Optimisations ciblées qui ont rendu le site 80% plus rapide.',
  },
  {
    icon: faGitlab,
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #431407 0%, #c2410c 100%)',
    metric: null,
    title: 'CI/CD GitLab',
    desc: 'Mise en place des pipelines GitLab CI/CD — inexistants avant mon arrivée. Régression significativement réduite.',
  },
  {
    icon: faShieldHalved,
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)',
    metric: null,
    title: 'SonarQube Cloud',
    desc: 'Déploiement de SonarQube Cloud pour garantir la qualité du code en continu.',
  },
  {
    icon: faServer,
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
    metric: '2',
    metricLabel: 'environnements',
    title: 'Prod & Dev',
    desc: 'Création des environnements de production et développement — aucun ne préexistait.',
  },
  {
    icon: faChartLine,
    color: '#4ade80',
    gradient: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
    metric: '+60%',
    metricLabel: 'productivité',
    title: 'Productivité équipe',
    desc: 'Gains de productivité pour l\'équipe grâce aux outils et processus mis en place.',
  },
  {
    icon: faCode,
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
    metric: null,
    title: 'Nouvelles fonctionnalités',
    desc: 'Développement continu de features selon les besoins métier, seul sur le projet.',
  },
]

function RealizationCard({ card }: { card: typeof cards[0] }) {
  return (
    <div className="real-card">
      <div className="real-card__glow" style={{ background: card.gradient }} />
      <div className="real-card__inner">
        <div className="real-card__icon-wrap" style={{ background: card.gradient }}>
          <FontAwesomeIcon icon={card.icon} className="real-card__icon" />
        </div>
        {card.metric && (
          <div className="real-card__metric">
            <span className="real-card__metric-value" style={{ color: card.color }}>
              {card.metric}
            </span>
            <span className="real-card__metric-label">{card.metricLabel}</span>
          </div>
        )}
        <h3 className="real-card__title">{card.title}</h3>
        <p className="real-card__desc">{card.desc}</p>
      </div>
    </div>
  )
}

function Realizations() {
  return (
    <div className="realizations">
      <p className="realizations__subtitle">Principales réalisations</p>
      <div className="realizations__grid">
        {cards.map((card, i) => (
          <RealizationCard key={i} card={card} />
        ))}
      </div>
    </div>
  )
}

export default Realizations
