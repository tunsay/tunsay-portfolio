import { useState } from 'react'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Turnstile } from '@marsidev/react-turnstile'

function Contact() {
  const [isVerified, setIsVerified] = useState(false)

  return (
    <div className="container-contact">
      <div className="title-container">Contact</div>

      {!isVerified ? (
        <div className="verification-container" style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
          <Turnstile
            siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY || ""}
            onSuccess={() => setIsVerified(true)}
          />
        </div>
      ) : (
        <>
          <a className="mail" href={`mailto:${process.env.REACT_APP_EMAIL}?`}>
            <FontAwesomeIcon icon={faMailBulk} className="icon-mail" />
            <span>{process.env.REACT_APP_EMAIL}</span>
          </a>
          <span className="num">
            <FontAwesomeIcon icon={faPhone} className="icon-mail" />
            <span>{process.env.REACT_APP_PHONE}</span>
          </span>
        </>
      )}
    </div>
  )
}

export default Contact
