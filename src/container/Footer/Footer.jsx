import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Hire Me</h1>
        <p className="p__opensans">16092 Crossed talons rd, Woodbridge, VA, 22193 USA</p>
        <p className="p__opensans">+1 281-896-2303</p>
      </div>
        <div className="app__footer-links_icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
        </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
      </div>
    </div>
  </div>
);

export default Footer;