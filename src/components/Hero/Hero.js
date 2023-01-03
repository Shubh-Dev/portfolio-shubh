import React from 'react';
import './hero.css';
import { Typewriter } from 'react-simple-typewriter';
import javascript from '../../assets/images/javascript.svg';
import react from '../../assets/images/react.png';
import rails from '../../assets/images/ruby-on-rails.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

const Hero = () => (
  <>
    <section className="hero" id="home">
      <div className="container top">
        <div className="left hero-left top" data-aos="slide-left">
          <h3 className="welcome">WELCOME...</h3>
          <h1>
            Hi, I'm
            <span> Shubh Dev</span>
          </h1>
          <h2>
            <span>
              <Typewriter
                words={['Professional Coder', 'Full-Stack Developer', 'Web Developer']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            I am a software developer who builds web apps using React, Redux, and Ruby on Rails. I graduated WLC with a PG degree and from Microverse as a full-stack web developer. I am passionate about building scalable web applications and I am always looking for new challenges.
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>LETS CONNECT</h4>
              <div className="button">
                <a title="Twitter" href="https://twitter.com/Shubh_M_das" target="_blank" rel="noreferrer">
                  <button type="button" className="btn_shadow">
                    <BsTwitter />
                  </button>
                </a>
                <a title="AngelList" href="https://angel.co/u/shubh-dev" target="_blank" rel="noreferrer">
                  <button type="button" className="btn_shadow">
                    <SiAngellist />
                  </button>
                </a>
                <a title="LinkedIn" href="https://www.linkedin.com/in/shubhscb/" target="_blank" rel="noreferrer">
                  <button type="button" className="btn_shadow">
                    <FaLinkedinIn />
                  </button>
                </a>
              </div>
            </div>
            <div className="col_1">
              <h4>BEST SKILLS </h4>
              <button title="JavaScript" type="button" className="btn_shadow">
                <img src={javascript} alt="skil" />
              </button>
              <button title="React" type="button" className="btn_shadow">
                <img src={react} alt="skil" />
              </button>
              <button title="Ruby on Rails" type="button" className="btn_shadow">
                <img src={rails} alt="skil" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>
);

export default Hero;
