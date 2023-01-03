import React from 'react';
import './hero.css';
import { Typewriter } from 'react-simple-typewriter';
import javascript from '../../assets/images/javascript.svg';
import react from '../../assets/images/react.png';
import rails from '../../assets/images/ruby-on-rails.svg';

const Hero = () => (
  <>
    <section className="hero" id="home">
      <div className="container top">
        <div className="left hero-left top" data-aos="slide-left">
          <h3 className="welcome">WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I'm
            <span> Sentayhu Berhanu</span>
          </h1>
          <h2>
            <span>
              <Typewriter
                words={['Professional Coder', 'Full-Stack Developer']}
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
            I am a software developer who builds web apps using React, Redux, and Ruby on Rails. I graduated from Unity University with a Bachelor of Science in Computer Science with Honors and from Microverse as a full-stack web developer. I have been working as a full-stack developer. I am passionate about building scalable web applications and I am always looking for new challenges.
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>LETS CONNECT</h4>
              <div className="button">
                <a title="Twitter" href="https://twitter.com/VoltageBerhanu" target="_blank" rel="noreferrer">
                  <button type="button" className="btn_shadow">
                    <i className="fab fa-twitter" />
                  </button>
                </a>
                <a title="AngelList" href="https://angel.co/u/sentayhu-berhanu" target="_blank" rel="noreferrer">
                  <button type="button" className="btn_shadow">
                    <i className="fab fa-angellist" />
                  </button>
                </a>
                <a title="LinkedIn" href="https://www.linkedin.com/in/sentayhu-berhanu" target="_blank" rel="noreferrer">
                  <button type="button" className="btn_shadow">
                    <i className="fab fa-linkedin-in" />
                  </button>
                </a>
              </div>
            </div>
            <div className="col_1">
              <h4>BEST SKILL ON </h4>
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
