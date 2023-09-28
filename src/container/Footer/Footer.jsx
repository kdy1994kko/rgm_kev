import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <p className="p__opensans"><a href="https://www.biblegateway.com/passage/?search=1+john+5%3A14&version=NIV" target="_blank" rel="noreferrer">&quot;This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.&quot;</a></p>
        <p className="p__opensans"><a href="https://www.biblegateway.com/passage/?search=1+john+5%3A14&version=NIV" target="_blank" rel="noreferrer">~ 1 john 5:14</a></p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
      </div>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/kevvankko.young/" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.linkedin.com/in/kevvan-d-young/" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href="https://instagram.com/blvck.kev44?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://github.com/kdy1994kko" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </div>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Hire Me</h1>
        <p className="p__opensans">16092 Crossed talons rd, Woodbridge, VA, 22193 USA</p>
        <p className="p__opensans">+1 281-896-2303</p>
      </div>
    </div>
  </div>
);

export default Footer;

