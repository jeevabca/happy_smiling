import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const year = new Date();
  return (
    <div className="footer">
        <div className="footer-box-1">
            <h2 className="headingText">Happy-Smiling</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat non asperiores</p>
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                    
            </div>
        </div>
                
        <p>Copyright &copy; {year.getFullYear()}</p>
    </div>
  )
}

export default Footer