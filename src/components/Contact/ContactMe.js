import React from 'react';
import './ContactMe.css';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const Contact = () => (
  <>
    <section className="gradient__bg Contact" id="contact">
      <div className="container top">
        <div className="heading text-center">
          <br />
          <h4>CONTACT</h4>
          <h1 className="gradient__bg">Contact Me</h1>
        </div>

        <div className="content d_flex">
          <div className="left">
            <div className="box box_shodow" data-aos="slide-right">
              <div className="img">
                <img src="https://www.quidel.com/sites/default/files/contact-me-button.png" className="contact-me-img" alt="" />
              </div>
              <div className="details">
                <h1 className="gradient__text">Shubh Dev</h1>
                <p className="gradient__text">Full-Stack devloper</p>
                <p className="gradient__text">I am available to get hired. Lets get connected</p>
                {' '}
                <br />
                <p className="gradient__text">
                  Email:
                  <a href="shubh.scb@gmail.com" className="email__hover"> shubh.scb@gmail.com</a>
                </p>
                {' '}
                <br />
                <span className="lets-connect">LETS CONNECT</span>
                <div className="button f_flex">
                  <a title="Twitter" href="https://twitter.com/Shubh_M_das" target="_blank" rel="noreferrer">
                    <button type="button" className="btn_shadow" id="contact-box" aria-label="Twitter">
                      <BsTwitter />
                    </button>
                  </a>
                  <a title="LinkedIn" href="https://www.linkedin.com/in/shubhscb/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn_shadow" id="contact-box" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </button>
                  </a>
                  <a title="GitHub" href="https://github.com/Shubh-Dev" target="_blank" rel="noreferrer">
                    <button type="button" className="btn_shadow" id="contact-box" aria-label="GitHub">
                      <AiOutlineGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right box_shodow" data-aos="slide-right">
            <form action="https://formspree.io/f/mknyrjvn" method="POST" id="form-cont" name="contactForm">

              <div className="input">
                <input type="text" name="name" maxLength="40" required placeholder="Name" />
              </div>

              <div className="input">
                <input type="email" name="email" required placeholder="Email" />
              </div>
              <div className="input">
                <textarea cols="30" rows="10" name="message" required placeholder="Your Message" />
              </div>
              <button type="submit" className="btn_shadow form-button" id="contact-box">
                SEND MESSAGE
                {' '}
                <i className="fa fa-long-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
