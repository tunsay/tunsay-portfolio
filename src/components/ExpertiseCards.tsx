import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCodeBranch, faArrowsRotate,
  faShieldHalved, faBug, faLock, faTriangleExclamation, faCircleCheck,
  faUserShield, faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import './ExpertiseCards.scss'

const categories = [
  {
    index: '01',
    title: 'DevSecOps\n& CI/CD',
    color: '#fb923c',
    items: [
      { icon: faCodeBranch,   label: 'GitLab CI/CD — pipeline from scratch' },
      { icon: faArrowsRotate, label: 'Méthode Agile / Scrum' },
    ],
  },
  {
    index: '02',
    title: 'Sécurité\nApplicative',
    color: '#f87171',
    items: [
      { icon: faShieldHalved,       label: 'OWASP Top 10, CVE / CVSS' },
      { icon: faCircleCheck,        label: 'SonarQube Cloud — analyse statique' },
      { icon: faBug,                label: 'OWASP ZAP — tests dynamiques' },
      { icon: faLock,               label: 'Security by Design' },
      { icon: faTriangleExclamation,label: 'EBIOS RM — gestion des risques' },
    ],
  },
  {
    index: '03',
    title: 'Conformité\n& Normes',
    color: '#60a5fa',
    items: [
      { icon: faBuilding,   label: 'ANSSI' },
      { icon: faUserShield, label: 'RGPD' },
      { icon: faCircleCheck,label: 'ISO 27001 (notions)' },
    ],
  },
]

function ExpertiseColumn({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`exp-col ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="exp-col__ghost">{cat.index}</span>

      <div className="exp-col__dot" style={{ background: cat.color }} />

      <h3 className="exp-col__title">
        {cat.title.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </h3>

      <ul className="exp-col__list">
        {cat.items.map((item, i) => (
          <li
            key={i}
            className="exp-col__item"
            style={{ transitionDelay: visible ? `${index * 100 + i * 60 + 250}ms` : '0ms' }}
          >
            <FontAwesomeIcon icon={item.icon} style={{ color: cat.color }} className="exp-col__item-icon" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExpertiseCards() {
  return (
    <div className="expertise">
      <div className="expertise__panel">
        {categories.map((cat, i) => (
          <ExpertiseColumn key={cat.index} cat={cat} index={i} />
        ))}
      </div>
    </div>
  )
}

export default ExpertiseCards
