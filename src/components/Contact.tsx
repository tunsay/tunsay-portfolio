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
            siteKey="0x4AAAAAADN5wKHfgkr53iiq"
            onSuccess={() => setIsVerified(true)}
          />
        </div>
      ) : (
        <>
          <a className="mail" href="mailto:tuna.saygili@live.fr?">
            <FontAwesomeIcon icon={faMailBulk} className="icon-mail" />
            <span>tuna.saygili@live.fr</span>
          </a>
          <span className="num">
            <FontAwesomeIcon icon={faPhone} className="icon-mail" />
            <span>06.95.13.66.29</span>
          </span>
        </>
      )}
    </div>
  )
}

export default Contact
