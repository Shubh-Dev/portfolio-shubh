import React from 'react';
import './ContactMe.css';

const Contact = () => (
  <>
    <section className="gradient__bg Contact" id="contact">
      <div className="container top">
        <div className="heading text-center">
          <h4>CONTACT</h4>
          <h1 className="gradient__bg">Contact With Me</h1>
        </div>

        <div className="content d_flex">
          <div className="left">
            <div className="box box_shodow" data-aos="slide-right">
              <div className="img">
                <img src="https://www.quidel.com/sites/default/files/contact-me-button.png" className="contact-me-img" alt="" />
              </div>
              <div className="details">
                <h1 className="gradient__text">Sentayhu Berhanu</h1>
                <p className="gradient__text">Full-Stack devloper</p>
                <p className="gradient__text">I am available for work. Connect with me via and call in to my account.</p>
                {' '}
                <br />
                <p className="gradient__text">
                  Email:
                  <a href="mailto:sentayhuberhanu19@gmail.com" className="email__hover"> sentayhuberhanu@gmail.com</a>
                </p>
                {' '}
                <br />
                <span className="lets-connect">LETS CONNECT</span>
                <div className="button f_flex">
                  <a href="https://twitter.com/VoltageBerhanu" target="_blank" rel="noreferrer">
                    <button type="button" className="btn_shadow" id="contact-box">
                      <i className="fab fa-twitter" />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/sentayhu-berhanu" target="_blank" rel="noreferrer">
                    <button type="button" className="btn_shadow" id="contact-box">
                      <i className="fab fa-linkedin" />
                    </button>
                  </a>
                  <a href="https://www.instagram.com/sentayhu_berhanu/" target="_blank" rel="noreferrer">
                    <button type="button" className="btn_shadow" id="contact-box">
                      <i className="fab fa-instagram" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right box_shodow" data-aos="slide-right">
            <form action="https://formspree.io/f/xwkyolko" method="POST" id="form-cont" name="contactForm">

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
