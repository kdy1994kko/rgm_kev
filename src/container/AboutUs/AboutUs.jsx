import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Careers</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Are You Looking For Hourly, Management or Corporate Positions ?? </p>
        <a href="https://careers.redlobster.com/" target="_blank" rel="noreferrer">
          <button type="button" className="custom__button">Know More</button>
        </a>
      </div>
 
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant"> History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">our enigmatic seafood eatery, known only to a select few, was clandestinely established in 1968. It tantalizes with its fresh oceanic delights and whispers of legendary biscuits, shrouded in an aura of secrecy.</p>
        <a href="https://www.redlobster.com/our-story/our-history" target="_blank" rel="noreferrer">
          <button type="button" className="custom__button">Know More</button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;


