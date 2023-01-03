import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => (
  <>
    <footer>
      <div className="conatiner text-center top">
        <div className="img">
          <img src={logo} alt="logo" data-aos="flip-up" className="logo-footer" />
        </div>
        <p>© 2022. All rights reserved</p>
      </div>
    </footer>
  </>
);

export default Footer;
