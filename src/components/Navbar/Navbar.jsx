import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="https://www.biblegateway.com/passage/?search=1+john+4%3A16&version=NIV" target="_blank" rel="noreferrer">"God Is Love"</a></li>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Specials</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login"> 
        <a href="https://auth.redlobster.com/login?state=hKFo2SBET2M0Q0pva0QxeXNtMmtCZWIxc2x1N3lCenR6Zi15N6FupWxvZ2luo3RpZNkgUEREaFk2VkhGdXhSdUpLQnhqb05wWG9iV1RWVVFmWV-jY2lk2SBxVjdOQnBGamI0Y2hIUmFnNHh2Q2pCSjlDR3R3Q0pDdA&client=qV7NBpFjb4chHRag4xvCjBJ9CGtwCJCt&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.redlobster.com%2Fcallback&response_type=code&scope=openid%20profile%20email%20offline_access&code_challenge=mrr2Lrgp3wK-iUEUMwEP8BPxPBtJLMzsFVJWpRCBptE&code_challenge_method=S256&nonce=638314203202913838.ZjBhMzNmNWMtY2Y0OS00MGIyLWExNDktZDg1MmFjYTlmZGU0Mzc4YzVlNzItOTZhNy00YzBjLTkxNmMtOTE1ZDMwNzQ4NGUw&audience=https%3A%2F%2Fmulesoft.redlobster.com&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=5.5.0.0" className="p__opensans" target="_blank" >Log In / Registration</a>
        <div />
        <a href="https://www.redlobster.com/order" target="_blank" className="p__opensans">Order Now</a>
      </div>   
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="https://www.biblegateway.com/passage/?search=1+john+4%3A16&version=NIV" target="_blank" rel="noreferrer" onClick={() => setToggleMenu(false)}>"God Is Love"</a></li>
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Specials</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



