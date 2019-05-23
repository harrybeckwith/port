import React from 'react';
import SocialIcons from '../components/SocialIcons';
import { Link } from 'react-router-dom'
import Links from '../components/Links';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inside">
          <div className="footer__icons menu__icons">
            <SocialIcons />
          </div>
          <div className="footer__note">
            <p>
              Created by <span className="hl">harry beckwith</span>
            </p>
          </div>
          <div className="footer__links">
            <Links />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
