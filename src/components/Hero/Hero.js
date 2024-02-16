import React from 'react';
import './hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { BsTwitter } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import javascript from '../../assets/images/javascript.svg';
import react from '../../assets/images/react.png';

const Hero = () => (
  <>
    <section className="hero" id="home">
      <div className="container top">
        <div className="left hero-left top" data-aos="slide-left">
          <h3 className="welcome">WELCOME...</h3>
          <h2>
            Hi, I&apos;m
            <span> Shubh Dev</span>
          </h2>
          <h2>
            <span>
              <Typewriter
                words={[
                  'Professional Coder',
                  'Full-Stack Developer',
                  'Web Developer',
                  'Software Engineer',
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          {/* <p>
            I am a full-stack software developer who builds web apps using React, Redux, and Ruby
            on Rails. I graduated from WLC with a PG degree and from Microverse as a full-stack web
            developer. I am passionate about building scalable web applications and I am always
            looking for new challenges.
          </p> */}
          <p>
            I am a full-stack software developer currently employed at
            Phenomenal Tech, where I contribute to the development of
            cutting-edge web applications. My tech stack includes Vue.js, Nuxt,
            React, Laravel, Ruby on Rails, Supabase, Golang, and Node.js. I
            bring a wealth of experience and expertise in building robust and
            scalable web solutions. With a strong foundation acquired through
            formal education and practical training, I am well-versed in
            utilizing Front-End and Back-ENd technologies to create seamless
            user experiences, I thrive on challenges and am always eager to
            explore new opportunities in the ever-evolving field of web
            development. Feel free to explore my portfolio and discover the
            projects that showcase my skills and passion for crafting
            exceptional digital experiences.
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>LETS CONNECT</h4>
              <div className="button">
                <a
                  title="Twitter"
                  href="https://twitter.com/Shubh_M_das"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn_shadow"
                    aria-label="Twitter"
                  >
                    <BsTwitter />
                  </button>
                </a>
                <a
                  title="AngelList"
                  href="https://angel.co/u/shubh-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn_shadow"
                    aria-label="AngelList"
                  >
                    <SiAngellist />
                  </button>
                </a>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/shubhscb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn_shadow"
                    aria-label="LinkedIn"
                  >
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
              <button
                title="Vue.js"
                type="button"
                className="btn_shadow"
                aria-label="Vuejs"
              >
                <img src="/vue.png" alt="skill" />
              </button>
              <button
                title="Laravel"
                type="button"
                className="btn_shadow"
                aria-label="Laravel"
              >
                <img src="/laravel.jpg" alt="skill" />
              </button>
              <br />
              <button
                title="Ruby on Rails"
                type="button"
                className="btn_shadow"
                aria-label="Ruby on Rails"
              >
                <img src="/rubyonrails.png" alt="skil" />
              </button>
              <button
                title="Node.js"
                type="button"
                className="btn_shadow"
                aria-label="Nodejs"
              >
                <img src="/nodejs.png" alt="skill" />
              </button>
              <button
                title="sql"
                type="button"
                className="btn_shadow"
                aria-label="sql"
              >
                <img src="/sql.png" alt="skill" />
              </button>
              <button
                title="Supabase"
                type="button"
                className="btn_shadow"
                aria-label="Supabase"
              >
                <img src="/supabase.png" alt="skill" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
