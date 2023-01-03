import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import men from '../../assets/images/men.png';

/* eslint-disable */
const Header = () => {
  // scrolling header at the top of the page
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 100);
  });
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo-wrap">
            <a href="#home" className="logo-link">
              <div className="outer-circle circle circle-5">
                <span className="sq sq-1" />
                <span className="inner-circle circle">
                  <img src={men} alt="person-img" className="shubh" />
                </span>
                <span className="sq sq-2" />
              </div>
            </a>
          </div>
          <div className="navlink">
            <ul
              className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase'}
              onClick={() => setMobile(false)}
            >
              <li>
                {' '}
                <Link
                  activeClass="active"
                  className="headerlinks"
                  to="home"
                  spy
                  smooth
                  offset={50}
                  duration={500}
                >
                  {' '}
                  Home
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  activeClass="active"
                  className="headerlinks"
                  to="portfolio"
                  spy
                  smooth
                  offset={-150}
                  duration={500}
                >
                  {' '}
                  Portfolio
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  activeClass="active"
                  className="headerlinks"
                  to="resume"
                  spy
                  smooth
                  offset={-140}
                  duration={500}
                >
                  {' '}
                  Resume
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  activeClass="active"
                  className="headerlinks"
                  to="blog"
                  spy
                  smooth
                  offset={-140}
                  duration={500}
                >
                  {' '}
                  Blog
                </Link>
              </li>
              <li>
                <button type="button" className="home-btn">
                  <a
                    href="https://github.com/Shubh-Dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </button>
              </li>
              <li>
                <button type="button" className="home-btn">
                  <a href="#contact">Hire Me</a>
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="toggle"
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? (
                <FaTimes className="fas fa-times close home-btn" />
              ) : (
                <FaBars className="fas fa-bars open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
