import { useEffect, useRef, useState } from 'react'
import './WorkflowDiagram.scss'

const steps = [
  {
    icon: (
      <svg viewBox="0 0 100 100" className="notion-icon" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="18" fill="#fff" />
        <path d="M20 22c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6v56c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6V22z" fill="#fff" stroke="#ddd" strokeWidth="2" />
        <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fontFamily="Georgia, serif" fill="#000">N</text>
      </svg>
    ),
    label: 'Notion',
    desc: 'Je consulte mes tâches',
  },
  {
    icon: <span className="step-emoji">💻</span>,
    label: 'Développement',
    desc: 'Je code la fonctionnalité',
  },
  {
    icon: <span className="step-emoji">✅</span>,
    label: 'Validation',
    desc: 'Revue par les collègues',
  },
  {
    icon: <span className="step-emoji">🚀</span>,
    label: 'Production',
    desc: 'Déploiement via CI/CD',
  },
]

function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState(0)
  const [lineProgress, setLineProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => {
        const next = (prev + 1) % steps.length
        return next
      })
    }, 2000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    setLineProgress(0)
    const start = performance.now()
    const duration = 1800
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setLineProgress(progress)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [activeStep])

  return (
    <div className="workflow-diagram">
      <h3 className="workflow-title">Mon workflow quotidien</h3>
      <div className="workflow-steps">
        {steps.map((step, i) => (
          <div key={i} className="workflow-step-wrapper">
            <div className={`workflow-step ${i <= activeStep ? 'active' : ''} ${i === activeStep ? 'current' : ''}`}>
              <div className="step-icon-wrapper">{step.icon}</div>
              <div className="step-label">{step.label}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="workflow-connector">
                <div className="connector-track">
                  <div
                    className="connector-fill"
                    style={{
                      width: i < activeStep ? '100%' : i === activeStep ? `${lineProgress * 100}%` : '0%',
                    }}
                  />
                </div>
                <div className={`connector-arrow ${i < activeStep || (i === activeStep && lineProgress === 1) ? 'visible' : ''}`}>▶</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowDiagram
