import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Wassgoodiiee This Is The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>impeccable service, a curated menu, attention to detail, culinary excellence, innovation, consistency, personalized experiences, guest focus, and timing. </p>
      <a href="https://www.redlobster.com/menu" target="_blank" rel="noreferrer">
        <button type="button" className="custom__button">Explore Menu</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

